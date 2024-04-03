export const authRoutes = [
  {
    path: '/auth',
    redirect: '/auth/sign-in',
    meta: {
      layout: 'Auth'
    },
    children: [
      {
        path: '/sign-in',
        name: 'SignIn',
        component: () => import('~/views/Auth/SignInView.vue'),
        meta: {
          title: 'Sign In'
        }
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: () => import('~/views/Auth/SignUpView.vue'),
        meta: {
          title: 'Sign Up'
        }
      }
    ]
  }
]

export default authRoutes
