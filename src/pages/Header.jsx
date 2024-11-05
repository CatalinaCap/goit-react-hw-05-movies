// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   const headerTitles = [
//     {
//       id: '1',
//       name: 'Home',
//       path: '/',
//     },
//     {
//       id: '2',
//       name: 'Movies',
//       path: '/searchMovies',
//     },
//   ];
//   return (
//     <div className={styles.header}>
//       <div className={styles.headerBrandBox}></div>
//       <ul>
//         {headerTitles.map(title => (
//           <li key={title.id}>
//             <NavLink
//               key={title.id}
//               to={title.path}
//               className={({ isActive }) =>
//                 [styles.navLink, isActive ? styles.navLinkActive : ''].join('')
//               }
//             >
//               {title.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Header;
