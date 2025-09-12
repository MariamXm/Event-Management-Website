import HomePage from '../pages/HomePage.vue'
import EventsPage from '../pages/EventsPage.vue'
import EventDetailPage from '../pages/EventDetailPage.vue'
import AboutUsPage from '../pages/AboutUsPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import UserDashboard from '../pages/user/UserDashbaord.vue'
import AdminDashboard from '../pages/admin/AdminDashboard.vue'
import EventEditingPage  from '../pages/admin/EventEditingPage.vue'
import EditForm from '../pages/admin/EditForm.vue'
import  AddForm from '../pages/admin/AddForm.vue'
import TicketEditingPage from '../pages/admin/TicketEditingPage.vue'
import TicketAddForm from '../pages/admin/TicketAddForm.vue'
import TicketEditForm from '../pages/admin/TicketEditForm.vue'
import PurchasedTicketsPage from '../pages/user/PurchasedTicketsPage.vue'
import SettingsPage from '../pages/user/SettingsPage.vue'

import AdminLayout from '../components/AdminLayout.vue'


const routes = [
    {path: '/', component: HomePage, name: "HomePage"},
    {path: '/events', component: EventsPage, name: "EventsPage"},
    {path: '/event-detail/:id', component: EventDetailPage, name: "EventDetailPage"},
    {path: '/about-us', component: AboutUsPage, name: "AboutUsPage"},
    // Login & Registration
    {path: '/login', component: LoginPage, name: "LoginPage"},
    {path: '/register', component: RegisterPage, name: "RegisterPage"},
    // user daashboard pages
    {path:'/dashboard', component: UserDashboard, name:"UserDashboard"},
    {path: '/purchased-tickets', component: PurchasedTicketsPage, name: "PurchasedTicketsPage"},
    {path: '/settings', component: SettingsPage, name: "SettingsPage"},
    // admin dashboard pages
    {path: "/admin", component: AdminLayout,  
        children: [
            {path:"/admin/dashboard",  component: AdminDashboard, name:"AdminDashboard"},
            {path: "/admin/event-editing", name: "EventEditingPage", component: EventEditingPage,},
            {path: "/admin/ticket-editing", name: "TicketEditingPage",component: TicketEditingPage,},
            {path:'/edit-form/:id', component: EditForm, name: "EditForm"},
            {path:'/add-form', component: AddForm, name: "AddForm"},
            {path:'/ticket/edit-form/:id', component: TicketEditForm, name: "TicketEditForm"},
            {path:'/ticket/add-form', component: TicketAddForm, name: "TicketAddForm"},
        ],
    },



]

export default routes