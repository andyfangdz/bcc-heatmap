import {
  Alignment,
  Navbar as BPNavbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Tab,
  Tabs,
} from '@blueprintjs/core';
import React from 'react';
import injectSheet from 'react-jss';
import {
  BrowserRouter as Router,
  matchPath,
  Route,
  withRouter,
} from 'react-router-dom';

export default function MainAppWithRoutes(title, routes) {
  @injectSheet({
    root: {
      display: 'flex',
    },
    header: {
      height: '50px',
    },
    main: {
      flex: 'auto',
      paddingTop: '2em',
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
  class Wrapper extends React.Component {
    static Routes() {
      return routes.map(it => (
        <Route
          exact={it.exact}
          path={it.path}
          component={it.component}
          key={it.name}
        />
      ));
    }

    static NavbarTabsWrapped({ selectedTabId, switchTab }) {
      return (
        <Tabs
          animate={true}
          id="navbar-tabs"
          large={true}
          selectedTabId={selectedTabId}
          onChange={newTab => switchTab(routes.find(it => it.name === newTab))}
        >
          {routes.map(it => (
            <Tab id={it.name} title={it.title} key={it.name} />
          ))}
        </Tabs>
      );
    }

    static NavbarTabs = withRouter(({ location, history }) => (
      <Wrapper.NavbarTabsWrapped
        selectedTabId={
          routes.find(it =>
            matchPath(location.pathname, { path: it.path, exact: it.exact })
          ).name
        }
        switchTab={route => history.push(route.path)}
      />
    ));

    static Navbar() {
      return (
        <BPNavbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>{title}</NavbarHeading>
            <NavbarDivider />
            <Wrapper.NavbarTabs />
          </NavbarGroup>
        </BPNavbar>
      );
    }

    render() {
      const { classes } = this.props;
      return (
        <Router>
          <article>
            <header className={classes.header}>
              <Wrapper.Navbar />
            </header>
            <main className={classes.main}>
              <Wrapper.Routes />
            </main>
          </article>
        </Router>
      );
    }
  }
  return Wrapper;
}
