import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "./Logo";
import { CONTACT, NAV } from "../../data/site";
import styles from "./Navbar.module.css";

const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const closeTimer = useRef(null);

  /* Elevate + frost the bar once the page has moved. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Navigating closes every overlay. Driven by the click rather than by a
     pathname effect, so re-clicking the current route closes them too. */
  const closeAll = useCallback(() => {
    setDrawerOpen(false);
    setOpenDropdown(null);
    setMobileSection(null);
  }, []);

  /* Lock the page behind the mobile drawer. */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setDrawerOpen(false);
      setOpenDropdown(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const openMenu = (label) => {
    window.clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  /* Small grace period so the pointer can travel into the panel. */
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 140);
  };

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      >
        <Container size="wide" className={styles.inner}>
          <Link
            to="/"
            className={styles.brand}
            aria-label="Kayo International — home"
            onClick={closeAll}
          >
            <Logo tone={scrolled ? "dark" : "light"} />
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.navList}>
              {NAV.map((item) => {
                const hasChildren = Boolean(item.children);
                const isOpen = openDropdown === item.label;

                return (
                  <li
                    key={item.label}
                    className={styles.navItem}
                    onMouseEnter={() => hasChildren && openMenu(item.label)}
                    onMouseLeave={() => hasChildren && scheduleClose()}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                      }
                      onClick={closeAll}
                      onFocus={() => hasChildren && openMenu(item.label)}
                      aria-expanded={hasChildren ? isOpen : undefined}
                      aria-haspopup={hasChildren ? "true" : undefined}
                    >
                      {item.label}
                      {hasChildren && (
                        <ChevronDown
                          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                          aria-hidden="true"
                        />
                      )}
                      <span className={styles.underline} aria-hidden="true" />
                    </NavLink>

                    {hasChildren && (
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            className={styles.dropdown}
                            initial={{ opacity: 0, y: 10, scale: 0.985 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.99 }}
                            transition={{ duration: 0.24, ease: EASE }}
                            onMouseEnter={() => openMenu(item.label)}
                            onMouseLeave={scheduleClose}
                          >
                            <ul className={styles.dropdownList}>
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    to={child.to}
                                    className={styles.dropdownLink}
                                    onClick={closeAll}
                                  >
                                    <span className={styles.dropdownLabel}>{child.label}</span>
                                    {child.desc && (
                                      <span className={styles.dropdownDesc}>{child.desc}</span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href={CONTACT.phoneHref} className={styles.phone}>
              <Phone className={styles.phoneIcon} aria-hidden="true" />
              <span>{CONTACT.phone}</span>
            </a>
            <Button to="/contact" size="sm" className={styles.cta}>
              Book a Tour
            </Button>
            <button
              type="button"
              className={styles.burger}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </Container>
      </motion.header>

      {/* ---------------------------------------------------------------- */}
      {/*  Mobile drawer                                                    */}
      {/* ---------------------------------------------------------------- */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className={styles.scrim}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={() => setDrawerOpen(false)}
            />

            <motion.aside
              className={styles.drawer}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.42, ease: EASE }}
            >
              <div className={styles.drawerTop}>
                <Logo compact />
                <button
                  type="button"
                  className={styles.close}
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                >
                  <X aria-hidden="true" />
                </button>
              </div>

              <nav className={styles.drawerNav} aria-label="Mobile">
                <ul className={styles.drawerList}>
                  {NAV.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: EASE }}
                    >
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            className={styles.drawerLink}
                            onClick={() =>
                              setMobileSection(mobileSection === item.label ? null : item.label)
                            }
                            aria-expanded={mobileSection === item.label}
                          >
                            {item.label}
                            <ChevronDown
                              className={`${styles.chevron} ${
                                mobileSection === item.label ? styles.chevronOpen : ""
                              }`}
                              aria-hidden="true"
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {mobileSection === item.label && (
                              <motion.ul
                                className={styles.drawerSub}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.32, ease: EASE }}
                              >
                                {item.children.map((child) => (
                                  <li key={child.label}>
                                    <Link
                                      to={child.to}
                                      className={styles.drawerSubLink}
                                      onClick={closeAll}
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <NavLink
                          to={item.to}
                          end={item.to === "/"}
                          className={({ isActive }) =>
                            `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`
                          }
                          onClick={closeAll}
                        >
                          {item.label}
                        </NavLink>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className={styles.drawerFoot}>
                <Button to="/contact" full onClick={closeAll}>
                  Book a Campus Tour
                </Button>
                <a href={CONTACT.phoneHref} className={styles.drawerPhone}>
                  <Phone aria-hidden="true" />
                  {CONTACT.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
