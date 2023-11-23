import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/post/:title',
      name: 'show-post',
      component: () => import('../components/PostShow.vue'),
      props: true,
    },
    {
      path: '/tag/:name',
      name: 'tag',
      component: () => import('@/components/Tag.vue'),
      props: true,
      async beforeEnter(to, from, next) {
        if (to.params && to.params.name) {
          const name = to.params.name;
          const module = await import ('@/zola-stores/all-tags.js');
          const tags = module.default;

          if (tags.includes(name)) {
            to.params.tag = name;
          }
        }
        to.params.from = from;
        next()
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: NotFound
    }
  ],
  // https://router.vuejs.org/guide/advanced/scroll-behavior.html
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router
