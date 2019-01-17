import * as React from 'react';
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  SwipeableDrawer,
  List,
  ListSubheader,
  ListItem,
  ListItemText
} from '@material-ui/core';

import {ListItemProps} from '@material-ui/core/ListItem';
import { Menu as MenuIcon } from '@material-ui/icons';

import { cn } from '@bem-react/classname';

import './Layout.css';

const cnLayout = cn('Layout');

function MenuItemLink(props: ListItemProps) {
    const { href = '', className } = props;

    return <Link to={href} className={className}>
        {props.children}
    </Link>;
}

interface LayoutState {
  isOpen: boolean;
}

interface MenuItemGroup {
  title: string;
  items: MenuItem[];
}

interface MenuItem {
  text: string;
  href: string;
}

const MENU: MenuItemGroup[] = [
  {
    title: 'Content',
    items: [
      { text: 'Navigation', href: '/nav' },
      { text: 'Pages', href: '/pages' },
      { text: 'News', href: '/news' },
    ]
  },
  {
    title: 'Catalog',
    items: [
      { text: 'Sections', href: '/sections' },
      { text: 'Products', href: '/products' },
      { text: 'Import', href: '/import' },
    ]
  },
  {
    title: 'Customers',
    items: [
      { text: 'Orders', href: '/orders' },
      { text: 'Feedback', href: '/feedback' },
    ]
  },
  {
    title: 'System',
    items: [
      { text: 'Settings', href: '/settings' },
      { text: 'Maintenance', href: '/maintenance' },
      { text: 'Test 1', href: '/p1/maintenance' },
      { text: 'Test 2', href: '/p2' },
    ]
  }
];

export class Layout extends React.Component<{}, LayoutState> {
  state: LayoutState = { isOpen: false };

  toggleMenuOpen = () => this.setState({ isOpen: true });

  toggleMenuClose = () => this.setState({ isOpen: false });

  renderMenuItem = ({href, text}: MenuItem, index: number) => {
    return <ListItem component={MenuItemLink} className={cnLayout('MenuItem')} key={index} button href={href}>
        <ListItemText primary={text} />
    </ListItem>;
  }

  renderMenuGroup = ({title, items}: MenuItemGroup, index: number) => {
    const subheader = <ListSubheader disableSticky={true} className={cnLayout('MenuSubheader')}>
        {title}
    </ListSubheader>;

    return <List key={index} className={cnLayout('MenuSection')} subheader={subheader} onClick={this.toggleMenuClose}>
        {items.map(this.renderMenuItem)}
    </List>;
  }

  renderMenu = () => {
    return <SwipeableDrawer className={cnLayout('Menu')} open={this.state.isOpen} onOpen={this.toggleMenuOpen} onClose={this.toggleMenuClose}>
        {MENU.map(this.renderMenuGroup)}
    </SwipeableDrawer>;
  }

  renderHeader = () => {
    return <AppBar position="fixed">
        <Toolbar>
            <IconButton className={cnLayout('MenuButton')} color="inherit" onClick={this.toggleMenuOpen}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
                store2
            </Typography>
        </Toolbar>
    </AppBar>;
  }

  render() {
    return <div className={cnLayout()}>
        {this.renderHeader()}
        {this.renderMenu()}
        {this.props.children}
    </div>;
  }
}
