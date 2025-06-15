import React, { memo, useCallback, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../styles/navbar.module.css';

const MenuItem = memo(({ path, label, isLast, toggleMenu, isMenuOpen, hasDropdown, dropdownItems }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    if (hasDropdown) {
      e.preventDefault();
      setDropdownOpen(prev => !prev);
    }
  };

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDropdown]);

  return (
    <div className={styles.menuItemContainer} ref={dropdownRef}>
      {hasDropdown ? (
        <>
          <button
            className={styles.dropdownButton}
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
          >
            {label} <FaChevronDown className={styles.dropdownArrow} aria-hidden="true" />
          </button>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              {dropdownItems?.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => {
                    closeDropdown();
                    if (isMenuOpen) toggleMenu();
                  }}
                  className={styles.dropdownItem}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </>
      ) : (
        <NavLink
          to={path}
          onClick={isMenuOpen ? toggleMenu : undefined}
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.link}` : styles.link
          }
        >
          {label}
        </NavLink>
      )}
    </div>
  );
});

export default MenuItem; 