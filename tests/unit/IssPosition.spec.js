import { mount } from '@vue/test-utils'
import IssPosition from '@/components/IssPosition.vue'

import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

describe('IssPosition', () => {
    it('renders position info', () => {
        const wrapper = mount(IssPosition)
    })
})