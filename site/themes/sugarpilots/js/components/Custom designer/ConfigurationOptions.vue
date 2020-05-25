<template>
  <div class="configuration--options">
    <div class="custom-builder-form" v-if="step === 1">
      <h5>Vælg størrelse</h5>
      <div class="option row select-size">
        <div v-for="size in sizes" :key="size.id" class="col-12 col-lg-4">
          <div
            :class="[
              'size-option u-cursor-pointer',
              { selected: size.size_name === selectedSize },
            ]"
            @click="selectSize(size.size_name, size.price)"
          >
            <div class="size-option-top">
              <h6>{{ size.size_name }}</h6>
              <p>{{ size.size_guide }}</p>
            </div>
          </div>
        </div>
      </div>

      <h5 :class="{ disabled: !selectedSize }">Vælg antal</h5>
      <div :class="['option row select-amount', { disabled: !selectedSize }]">
        <div v-for="amount in amounts" :key="amount.id" class="col-12 col-lg-4">
          <div
            :class="[
              'amount-option u-cursor-pointer',
              { selected: amount.amount === selectedAmount },
            ]"
            @click="selectAmount(amount.amount)"
          >
            <div class="amount-option-top">
              <h6>{{ amount.amount }}</h6>
              <p v-if="selectedSize">
                pris i alt:
                {{ Number(priceForEach) * Number(amount.amount) }} kr.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h5 :class="{ disabled: !selectedAmount }">Vælg farve</h5>
      <div
        :class="['option w-1/2 select-color', { disabled: !selectedAmount }]"
      >
        <div
          v-for="color in colors"
          :class="[
            'color-option u-cursor-pointer',
            { selected: color.color_name === selectedColor },
          ]"
          :key="color.id"
          @click="selectColor(color.color_name, color.color_code)"
        >
          <div class="color" :style="`--bg-color:${color.color_code}`"></div>
          <div class="color-name">
            {{ color.color_name }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="content">
            <h5 :class="{ disabled: !selectedColor }">Vælg smag</h5>
            <div
              :class="['option select-flavor', { disabled: !selectedColor }]"
            >
              <div class="form-group">
                <select
                class="u-cursor-pointer"
                  name="flavor"
                  id="flavorSelector"
                  @change="changeFlavor"
                >
                  <option
                    v-for="flavor in filteredFlavors"
                    :key="flavor.id"
                    :value="flavor.name"
                    >{{ flavor.name }}</option
                  >
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="content">
            <h5 :class="{ disabled: !selectedColor }">Vælg dekoration</h5>
            <div
              :class="['option select-flavor', { disabled: !selectedColor }]"
            >
              <div class="group">
                <input
                  type="text"
                  name="lollipopText"
                  id="lollipopText"
                  placeholder="Ikke valgt"
                  @keyup="changeText"
                />
                <small>Efterlad blank hvis tekst ikke ønskes.</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <h5 :class="{ disabled: !selectedColor }">Ønsket leveringsdato</h5>
          <div :class="['option select-flavor u-cursor-pointer', { disabled: !selectedColor }]">
            <datepicker
              :disabled-dates="calender.disabledDates"
              :monday-first="true"
              @selected="changeDate"
              v-model="selectedDate"
              class="u-cursor-pointer"
            ></datepicker>
          </div>
        </div>
      </div>
    </div>


<div class="col-12 row justify-content-center mt-2 mb-3 mt-md-3">
    <button class="button-icon large" :class="[{ disabled: !selectedDate }]"
      v-if="step === 1"
      @click="goToStep(2)">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Leverings information</span>
  </button>
  </div>

    <div class="contact-information-form" v-if="step === 2">
      <h1 class="text-center mb-4">Dine informationer</h1>
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <div class="group">
            <label>Fornavn:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Jens"
              v-model="contactForm.name"
              @keyup="validateInput('name')"
              :class="{ 'is-invalid': !validation.name.valid }"
            />
            <p class="invalid-message">
              <em>Fornavn</em> må kun indholde bogstaver.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="group">
            <label>Efternavn:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Jensen"
              v-model="contactForm.lastname"
              @keyup="validateInput('lastname')"
              :class="{ 'is-invalid': !validation.lastname.valid }"
            />
            <p class="invalid-message">
              <em>Efternavn</em> må kun indholde bogstaver.
            </p>
          </div>
        </div>

        <div class="col-12">
          <div class="group">
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jens.jensen@gmail.com"
              v-model="contactForm.email"
              @keyup="validateInput('email')"
              :class="{ 'is-invalid': !validation.email.valid }"
            />
            <p class="invalid-message">
              <em>E-mail</em> skal indholde en gyldig e-mail
            </p>
          </div>
        </div>

        <div class="col-12">
          <div class="group">
            <label for="comment" class="col-form-label d-flex justify-content-between "
              >Telefon nr.:
              <span class="helper-label">Ikke påkrævet</span></label
            >
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="22222222"
              v-model="contactForm.phone"
              @keyup="validateInput('phone')"
              :class="{ 'is-invalid': !validation.phone.valid }"
            />
            <p class="invalid-message">
              <em>Telefon</em> skal indholde et gyldigt mobil nummer eller
              efterlades blankt
            </p>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="group">
            <label>Post nr.</label>
            <input
              type="text"
              name="postal"
              id="postal"
              placeholder="2500"
              v-model="contactForm.postal"
              @keyup="validateInput('postal')"
              :class="{ 'is-invalid': !validation.postal.valid }"
            />
            <p class="invalid-message">
              <em>Post nr.</em> må maks indholde 4 tal.
            </p>
          </div>
        </div>

        <div class="col-12 col-md-8">
          <div class="group">
            <label>Adresse</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Valby langgade 30, 1.th"
              v-model="contactForm.address"
              @keyup="validateInput('address')"
              :class="{ 'is-invalid': !validation.address.valid }"
            />
            <p class="invalid-message">
              <em>Adresse</em> skal indeholde en gyldig adressse.
            </p>
          </div>
        </div>
      </div>
    </div>
<div class="col-12 row justify-content-center mt-2 mb-3 mt-md-3" :class="[{ disabled: !isFormValid }]">
      <button class="button-icon" v-if="step === 2" @click="submitOrder">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Bestil og betal</span>
  </button>
</div>
    <div class="hidden-form">
      <form id="custom-order" action="/!/Form/create">
        <input
          type="hidden"
          name="_token"
          value="iv5CkIuzmC6UT1TOdJVBY0Q4mxPsBNF6dqxmIwJd"
        />
        <input
          type="hidden"
          name="_params"
          value="eyJpdiI6IjdZbk1qam1yVEJReVJ4T1VmVmNCcnc9PSIsInZhbHVlIjoiRTd6TENZZnpkUklpZHdEVTF4TGVOSDgxb1FPaEpGRkVWT3pWbk5lUFhDRngwNStMQXpiazVGVitmelNOWkNcL3IiLCJtYWMiOiJiZjIzNDFkM2JlNzYwMDZiY2RjYjU5MTFkNTQxODc4NzZjZjhmZTA5MTk5YzgyZTExMzJmODUxNGViMDJiNDNhIn0="
        />
        <input type="text" name="size" id="size" v-model="selectedSize" />
        <input type="text" name="amount" id="amount" v-model="selectedAmount" />
        <input type="text" name="color" id="color" v-model="selectedColor" />
        <input type="text" name="flavor" id="flavor" v-model="selectedFlavor" />
        <input type="text" name="text" id="text" v-model="selectedText" />
        <input
          type="text"
          name="delivery_date"
          id="delivery_date"
          v-model="selectedDate"
        />
        <input
          type="text"
          name="total_price"
          id="total_price"
          v-model="totalPrice"
        />
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Jens"
          v-model="contactForm.name"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Jensen"
          v-model="contactForm.lastname"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="jens.jensen@gmail.com"
          v-model="contactForm.email"
        />
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="+45 22 22 22 22"
          v-model="contactForm.phone"
        />
        <input
          type="text"
          name="postal"
          id="postal"
          placeholder="2500"
          v-model="contactForm.postal"
        />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Valby langgade 30, 1.th"
          v-model="contactForm.address"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import RangeSlider from "vue-range-slider";
import Datepicker from "vuejs-datepicker";
// you probably need to import built-in style
import "vue-range-slider/dist/vue-range-slider.css";

export default {
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    minOrder: {
      type: String,
      required: true,
    },
    amounts: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
    },
    flavors: {
      type: Array,
      required: true,
    },
  },
  components: {
    Datepicker,
  },
  data() {
    return {
      step: 1,
      selectedDate: null,
      calender: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        disabledDates: {
          to: new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() + 5
          ),
          days: [6, 0],
        },
      },
      contactForm: {
        name: null,
        lastname: null,
        email: null,
        phone: null,
        postal: null,
        address: null,
      },
      validation: {
        name: {
          valid: false,
          rule: /[A-Za-z]/,
          required: true,
        },
        lastname: {
          valid: false,
          rule: /[A-Za-z]/,
          required: true,
        },
        email: {
          valid: false,
          rule: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
          required: true,
        },
        phone: {
          valid: true,
          rule: /^(\s*|^\d{8}$)$/,
        },
        postal: {
          valid: false,
          rule: /^\d{4}$/,
          required: true,
        },
        address: {
          valid: false,
          rule: /\s\S/,
          required: true,
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      selectedSize: "configuration/selectedSize",
      selectedAmount: "configuration/amount",
      selectedColor: "configuration/selectedColorName",
      selectedFlavor: "configuration/selectedFlavor",
      selectedText: "configuration/selectedText",
      selectedDate: "configuration/selectedDate",
      priceForEach: "configuration/priceForEach",
    }),
    totalPrice() {
      return Number(this.priceForEach) * Number(this.selectedAmount);
    },
    filteredFlavors() {
      if (this.selectedColor) {
        return this.flavors.filter(
          (flavor) =>
            flavor.color.toLowerCase() === this.selectedColor.toLowerCase()
        );
      } else {
        return this.flavors.filter(
          (flavor) =>
            flavor.color.toLowerCase() ===
            this.colors[0].color_name.toLowerCase()
        );
      }
    },
    isFormValid() {
      return Object.values(this.validation).every(item => item.valid === true)
    },
  },
  mounted() {
    this.$eventBus.$on("change-step", (step) => {
      this.step = step;
    });
  },
  methods: {
    ...mapMutations({
      setSelectedSize: "configuration/setSelectedSize",
      setPriceForEach: "configuration/setPriceForEach",
      setAmount: "configuration/setAmount",
      setColorName: "configuration/setColorName",
      setColorCode: "configuration/setColorCode",
      setFlavor: "configuration/setFlavor",
      setText: "configuration/setSelectedText",
      setDate: "configuration/setDate",
    }),
    selectSize(sizeName, sizePrice) {
      this.setSelectedSize(sizeName);
      this.setPriceForEach(sizePrice);
      if (!this.selectedAmount) {
        this.selectAmount(this.amounts[0].amount);
        this.selectColor(this.colors[0].color_name, this.colors[0].color_code);
        this.selectColor(this.colors[0].color_name, this.colors[0].color_code);
        this.selectFlavor(this.filteredFlavors[0].name);
      }
    },
    selectAmount(amount) {
      this.setAmount(amount);
    },
    selectColor(name, code) {
      this.setColorName(name);
      this.setColorCode(code);
      this.selectFlavor(this.filteredFlavors[0].name);
    },
    selectFlavor(flavor) {
      this.setFlavor(flavor);
    },
    changeFlavor(e) {
      this.setFlavor(e.target.value);
    },
    changeText(e) {
      this.setText(e.target.value);
    },
    changeDate(date) {
      date = new Date(date);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      this.setDate(`${day} / ${month} / ${year}`);
    },
    submitOrder(e) {
      e.preventDefault();
      document.forms["custom-order"].submit();
    },
    goToStep(step) {
      this.step = step;
      this.$eventBus.$emit('change-step', step)
      window.scrollTo(0, 0);
    },
    validateInput(name) {
      const value = this.contactForm[name];
      const rule = this.validation[name].rule;

      if (typeof rule !== "function") {
        this.validation[name].valid = rule.test(value);
        return this.validation[name].valid;
      }
    },
  },
};
</script>

<style></style>
