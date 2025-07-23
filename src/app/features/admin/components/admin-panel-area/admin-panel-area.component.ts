import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel-area',
  templateUrl: './admin-panel-area.component.html',
  styleUrl: './admin-panel-area.component.scss'
})
export class AdminPanelAreaComponent {

  navItems = [
    { name: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
    { name: 'Product', link: '/product', icon: 'category' },
    { name: 'Order list', link: '/orders', icon: 'list_alt' },
    { name: 'Analytics', link: '/analytics', icon: 'analytics' },
    { name: 'Stock', link: '/stock', icon: 'inventory' },
    { name: 'Total order', link: '/total-orders', icon: 'assignment' },
    { name: 'Team', link: '/team', icon: 'group' },
    { name: 'Messages', link: '/messages', icon: 'message' },
    { name: 'Favorites', link: '/favorites', icon: 'favorite' },
    { name: 'Setting', link: '/settings', icon: 'settings' },
  ];

  statsCards = [
    { title: 'Total Order', value: '40,876', trend: 'up', icon: 'shopping_cart' },
    { title: 'Total Sales', value: '38,876', trend: 'up', icon: 'shopping_bag' },
    { title: 'Total Profit', value: '$12,876', trend: 'up', icon: 'monetization_on' },
    { title: 'Total Return', value: '11,086', trend: 'down', icon: 'undo' },
  ];

  recentSales = [
    { date: '02 Jan 2021', customer: 'Alex Doe', status: 'Delivered', amount: 204.98 },
    { date: '02 Jan 2021', customer: 'David Mart', status: 'Pending', amount: 24.55 },
    { date: '02 Jan 2021', customer: 'Roe Parter', status: 'Returned', amount: 25.88 },
    { date: '02 Jan 2021', customer: 'Diana Penty', status: 'Delivered', amount: 170.66 },
    { date: '02 Jan 2021', customer: 'Martin Paw', status: 'Pending', amount: 56.56 },
    { date: '02 Jan 2021', customer: 'Doe Alex', status: 'Returned', amount: 44.95 },
    { date: '02 Jan 2021', customer: 'Aiana Lexa', status: 'Delivered', amount: 67.33 },
    { date: '02 Jan 2021', customer: 'Rexel Mags', status: 'Pending', amount: 23.53 },
    { date: '02 Jan 2021', customer: 'Tiana Loths', status: 'Delivered', amount: 46.52 },
  ];

  topProducts = [
    { name: 'Vuitton Sunglasses', price: 1142, image: 'assets/img/1.png' },
    { name: 'Hourglass Jeans', price: 1567, image: 'assets/img/2.png' },
    { name: 'Nike Sport Shoe', price: 1234, image: 'assets/img/3.png' },
    { name: 'Hermes Silk Scarves', price: 2312, image: 'assets/img/4.png' },
    { name: 'Succi Ladies Bag', price: 1456, image: 'assets/img/5.png' },
    { name: 'Gucci Women\'s Bags', price: 2345, image: 'assets/img/6.png' },
    { name: 'Addidas Running Shoe', price: 2345, image: 'assets/img/7.png' },
    { name: 'Bilack Wear\'s Shirt', price: 1245, image: 'assets/img/8.png' },
  ];

  constructor() { }
}
