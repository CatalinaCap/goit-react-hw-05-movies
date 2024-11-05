import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import PropTypes from 'prop-types';

const SharedLayout = () => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <nav>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={styles.link}>
          Movies
        </NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);
SharedLayout.propTypes = {
  children: PropTypes.node,
};

export default SharedLayout;
