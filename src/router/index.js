import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import cli from '@/components/cli'
import tbale from '@/components/tbale'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test',
      components: {
        test: Test,
        cli: cli,
        tbale: tbale
      }

    }
  ]
})
