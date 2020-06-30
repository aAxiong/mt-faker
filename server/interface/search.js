import Router from 'koa-router';
import axios from './utils/axios'


let router = new Router({
  prefix: '/search'
})

router.get('top', async (ctx) => {
    
})


export default router