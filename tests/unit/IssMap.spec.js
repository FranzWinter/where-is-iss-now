import { mount } from '@vue/test-utils'
import IssMap from '@/components/IssMap.vue'

import Vue from 'vue'
import Vuetify from 'vuetify';
Vue.use(Vuetify);

describe('IssMap', () => {
    it('renders map', () => {
        const wrapper = mount(IssMap)
        expect(wrapper.html().includes('map')).toBe(true)
    })
})