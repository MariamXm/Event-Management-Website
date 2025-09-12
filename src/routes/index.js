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


const routes = [
{path: '/', component: HomePage, name: "HomePage"},
{path: '/events', component: EventsPage, name: "EventsPage"},
{path: '/event-detail/:id', component: EventDetailPage, name: "EventDetailPage"},
{path: '/about-us', component: AboutUsPage, name: "AboutUsPage"},
{path: '/login', component: LoginPage, name: "LoginPage"},
{path: '/register', component: RegisterPage, name: "RegisterPage"},

{path:'/dashboard', component: UserDashboard, name:"UserDashboard"},
{path:'/admin/dashboard', component: AdminDashboard, name:"AdminDashboard"},
{path:'/admin/event-editing', component: EventEditingPage, name:"EventEditingPage"},
{path:'/edit-form/:id', component: EditForm, name: "EditForm"},
{path:'/add-form', component: AddForm, name: "AddForm"},
{path:'/admin/ticket-editing', component: TicketEditingPage, name: "TicketEditingPage"},
{path:'/ticket/edit-form/:id', component: TicketEditForm, name: "TicketEditForm"},
{path:'/ticket/add-form', component: TicketAddForm, name: "TicketAddForm"},
{path: '/purchased-tickets', component: PurchasedTicketsPage, name: "PurchasedTicketsPage"},
{path: '/settings', component: SettingsPage, name: "SettingsPage"},

]

export default routes