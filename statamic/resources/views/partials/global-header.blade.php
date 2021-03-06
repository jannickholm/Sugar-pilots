<div class="cp-head">

    <div class="logo">
        <a href="{{ route('cp') }}" class="flex items-center">
              Sugar Pilots  
              <span class="version" v-cloak>@{{ version }}</span>
        </a>
    </div>

    <search-typeahead v-ref:search></search-typeahead>

    <div class="head-links pl-1 flex items-center">
        <a href="{{ route('site') }}" target="_blank" v-cloak v-tip :tip-text="translate('cp.view_site')">
            <span class="icon icon-popup"></span>
        </a>

        <a class="dropdown-toggle ml-1 hide md:block" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="/assets/sugarpilots_logo-300x253.png" alt="" height="32" width="32" class="round ml-8 z-depth-1">
        </a>
        <ul class="dropdown-menu hide md:block">
            <li><a href="{{ route('account') }}">{{ t('profile') }}</a></li>
            <li><a href="{{ route('account.password') }}">{{ t('change_password') }}</a></li>
            <li class="divider"></li>
            <li><a href="{{ route('logout') }}">{{ t('sign_out') }}</a></li>
        </ul>
    </div>

</div>
