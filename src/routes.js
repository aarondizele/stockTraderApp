import Main from '@/components/Main'

// Lazy loading

const Portfolio = resolve => {
  require.ensure(['@/components/portfolio/Portfolio'], () => {
    resolve(require('@/components/portfolio/Portfolio'));
  }, 'portfolio')
}

const Stocks = resolve => {
  require.ensure(['@/components/stock/Stocks'], () => {
    resolve(require('@/components/stock/Stocks'));
  }, 'stocks')
}

export const routes = [
  { path: '/', name: 'main', component: Main },
  { path: '/portfolio', name: 'portfolio', component: Portfolio },
  { path: '/stocks', name: 'stocks', component: Stocks },
  { path: '*', redirect: '/' }
]
