<template>
    <div>
        <modal :show="show" @closed="close" class="modal-wide">
            <template slot="header">{{ translate('cp.select_fieldtype')}}</template>
            <template slot="body">
                <div class="filter">
                    <a @click="filterBy = 'all'" :class="{'active': filterBy == 'all'}">{{ translate('cp.all') }}</a>
                    <a @click="filterBy = filter" v-for="filter in filteredFilters" :class="{'active': filterBy == filter}">
                        {{ translate(`cp.fieldtype_category_${filter.toLowerCase()}`) }}
                    </a>
                    <a @click.prevent="openSearch" :class="['no-dot', {'active': search}]"><span class="icon icon-magnifying-glass"></span></a>
                </div>
                <div class="fieldtype-selector">
                    <div :class="['search', { 'is-searching': isSearching }]">
                        <input type="text" v-model="search" v-el:search @keydown.esc="cancelSearch" :placeholder="`${translate('cp.search')}...`" />
                    </div>
                    <div class="flex flex-wrap -mx-1 fieldtype-list">
                        <div class="w-1/2 sm:w-1/3 md:w-1/4 p-1" v-for="option in fieldtypeOptions">
                            <a class="border flex items-center group w-full rounded shadow-sm py-1 px-2"
                                @click="select(option)">
                                <svg-icon class="h-4 w-4 opacity-50 group-hover:opacity-100" :name="option.icon"></svg-icon>
                                <span class="pl-2 text-grey-dark group-hover:text-grey-darkest">{{ option.text }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </template>
        </modal>
    </div>
</template>

<script>
export default {

    props: {
        fieldtypes: {},
        onSelect: {},
        show: {},
        allowTitle: {
            default: false
        },
        allowSlug: {
            default: false
        },
        allowDate: {
            default: false
        },
    },

    data: function() {
        return {
            isActive: false,
            filterBy: 'all',
            filters: ['Text', 'Media', 'Pickable', 'Structured', 'Relationship', 'Special', 'System'],
            search: '',
            isSearchOpen: false
        }
    },

    computed: {

        fieldtypeSelectionText: function() {
            return _.findWhere(this.fieldtypesSelectOptions, { value: this.fieldtypeSelection }).text;
        },

        allFieldtypes() {
            let options = this.fieldtypes.map(fieldtype => {
                return {text: fieldtype.label, value: fieldtype.name, categories: fieldtype.categories, icon: fieldtype.icon};
            });

            if (this.allowDate) options.unshift({text: translate('cp.publish_date'), value: 'date', categories: ['system'], isMeta: true, icon: 'date'});
            if (this.allowSlug) options.unshift({text: translate('cp.slug'), value: 'slug', categories: ['system'], isMeta: true, icon: 'slug'});
            if (this.allowTitle) options.unshift({text: translate('cp.title'), value: 'title', categories: ['system'], isMeta: true, icon: 'title'});

            return options;
        },

        searchFilteredFieldtypes() {
            let options = this.allFieldtypes;

            if (this.search) {
                options = options.filter(fieldtype => {
                    return fieldtype.text.toLowerCase().includes(this.search.toLowerCase());
                })
            }

            return options;
        },

        fieldtypeOptions() {
            const options = this.searchFilteredFieldtypes;

            return this.filterBy === 'all'
                ? options
                : options.filter(fieldtype => fieldtype.categories.includes(this.filterBy.toLowerCase()));
        },

        filteredFilters() {
            if (!this.search && this.allowMeta) return this.filters;

            return this.filters.filter(filter => {
                return this.searchFilteredFieldtypes.filter(fieldtype => fieldtype.categories.includes(filter.toLowerCase())).length;
            });
        },

        allowMeta() {
            return this.allowTitle || this.allowSlug || this.allowDate;
        },

        isSearching() {
            return this.search || this.isSearchOpen;
        }
    },

    watch: {

        show(val) {
            if (val) this.$els.search.focus();
        }

    },

    methods: {

        select(selection) {
            if (selection.isMeta) {
                return this.selectMeta(selection);
            }

            const field = this.createField(selection.value);

            this.$emit('selected', field);
            this.close();
        },

        selectMeta(selection) {
            let fieldtype = selection.value;

            if (['title', 'slug'].includes(fieldtype)) {
                fieldtype = 'text';
            }

            let field = this.createField(fieldtype);

            field = Object.assign({
                display: translate(`cp.${selection.value}`),
                name: selection.value,
                type: fieldtype,
                isMeta: true
            }, field);

            this.$emit('selected', field);
            this.close();
        },

        createField(name) {
            const fieldtype = _.findWhere(this.fieldtypes, { name });

            // Build the initial empty field. The event listener will assign display, name,
            // and id keys. This will be 'field_n' etc, where n would be the total root
            // level, grid, or set fields depending on the event listener location.
            let field = {
                type: fieldtype.name,
                instructions: null,
                localizable: false,
                width: 100,
                isNew: true
            };

            // Vue's reactivity works best when an object already has the appropriate values.
            // We'll set up the default values for each config option. Each option might
            // have a default value defined, otherwise will just set it to null.
            let defaults = {};
            _.each(fieldtype.config, configField => {
                defaults[configField.name] = configField.default || null;
            });

            // Smoosh the field together with the defaults.
            return Object.assign(defaults, field);
        },

        close() {
            this.search = '';
            this.filterBy = 'all';
            this.$emit('closed');
        },

        openSearch() {
            this.isSearchOpen = true;
            this.$els.search.focus();
        },

        cancelSearch() {
            this.isSearchOpen = false;
            this.search = '';
        }

    }

}
</script>
