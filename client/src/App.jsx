// import { Outlet } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// import { Provider } from 'react-redux';
// import store from './store';


// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <div>
//         <Provider store={store}>
//           <Outlet /> 
//         </Provider>
//       </div>
//     </ApolloProvider>
//   );
// }

// export default App;

// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import CTA from './components/CTA';
// import Footer from './components/Footer';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <Hero />
//         <Features />
//         <CTA />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;



import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AIDemo from './components/AIDemo'
export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800"
    >
      <Hero />
      <Features />
      <AIDemo />
      <CTA />
      <Footer />
    </motion.div>
  )
}



