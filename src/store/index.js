import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events:  JSON.parse(localStorage.getItem("events")) || [
      {
        id: 1,
        title: "Music Concert",
        date: "2025-02-25",
        poster: "https://www.alliedmarketresearch.com/blog/Blog_banner_image/ctoykrzsmv.jpeg",
        description: "Experience a night full of energy with live performances from top artists. Enjoy a mesmerizing atmosphere with dazzling lights, booming sound systems, and an electrifying crowd. Dance to your favorite tracks and sing along with the stars on stage. This event promises unforgettable vibes and memories that will last a lifetime.",
        location: "Lahore Expo Center",
      },
      {
        id: 2,
        title: "Food Festival",
        date: "2025-05-27",
        poster: "https://www.gourmetads.com/wp-content/uploads/2020/01/food-festival-advertising-square.jpg",
        description: "A weekend of delicious food stalls, cooking shows, and live entertainment. Explore cuisines from around the world, meet talented chefs, and taste unique street food flavors. Enjoy live music, fun activities for kids, and a festive atmosphere for the whole family. Come hungry and leave inspired.",
        location: "Karachi Beach View Park",
      },
      {
        id: 3,
        title: "Tech Expo",
        date: "2025-08-12",
        poster: "https://verkotan.com/wp-content/uploads/2024/11/IMG-20241120-WA0062-1024x771.jpg",
        description: "Explore the future of technology with innovative gadgets and startups. Get hands-on experience with AI, robotics, and smart devices. Attend keynote sessions from industry leaders and discover how tech is reshaping our lives. Network with entrepreneurs, investors, and fellow innovators.",
        location: "Islamabad Convention Center",
      },
      {
        id: 4,
        title: "Theater Night",
        date: "2025-01-10",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSec6saRXCWwiyCDwmCPuqBO_64wWgNSxaWQem7qbNKKhj_QTxAI1cV_TdXpmJSvYhLanc&usqp=CAU",
        description: "An evening of drama, comedy, and cultural performances. Witness talented actors bring stories to life on stage with passion and emotion. Enjoy a mix of classic and modern plays that will keep you entertained throughout the night. A perfect outing for theater lovers and culture enthusiasts.",
        location: "Alhamra Arts Council, Lahore",
      },
      {
        id: 5,
        title: "Cricket Match",
        date: "2025-07-25",
        poster: "https://ik.imagekit.io/p1/ashes-view-from-seat-2-scaled.jpg?tr=w-1304",
        description: "Watch your favorite teams battle it out in a thrilling T20 encounter. Feel the stadium energy with roaring fans, live commentary, and nail-biting finishes. Enjoy food stalls, official merchandise, and a true cricketing festival. A must-attend for sports lovers and families alike.",
        location: "National Stadium, Karachi",
      },
      {
        id: 6,
        title: "Book Fair",
        date: "2025-10-10",
        poster: "https://forum-norwich.imgix.net/hero-images/events/2022/PBFA-Book-Fair/pbfa-book-fair.jpg?auto=compress&crop=focalpoint&fit=crop&fp-x=0.39&fp-y=0.47&fp-z=1&ixlib=php-3.3.1",
        description: "Browse thousands of books, meet authors, and attend workshops. Discover rare collections, educational resources, and trending bestsellers. Participate in interactive storytelling sessions and enjoy discounts on your favorite titles. A paradise for bookworms of all ages.",
        location: "Expo Center, Karachi",
      },
      {
        id: 7,
        title: "Fashion Show",
        date: "2025-07-01",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3icXSdKsZwVmDfDhUa0pe8b0Anrflls6f0A&s",
        description: "A glamorous evening showcasing the latest fashion trends. Watch top designers unveil their newest collections on the runway. Enjoy dazzling lights, stylish outfits, and celebrity appearances. An unmissable event for fashion lovers and trendsetters.",
        location: "Serena Hotel, Islamabad",
      },
      {
        id: 8,
        title: "Comedy Night",
        date: "2025-10-06",
        poster: "https://media.istockphoto.com/id/1475734000/vector/stand-up-stage-with-mic-and-stool.jpg?s=612x612&w=0&k=20&c=bvwCcK8TVwT4Oyx5ntT2f3x0qRIFuAb4N6LmSBw9XXg=",
        description: "Laugh out loud with the funniest comedians in town. Enjoy clever punchlines, hilarious sketches, and relatable stories. A night full of joy, relaxation, and nonstop entertainment. Bring your friends along for an evening you won’t forget.",
        location: "Arts Council Karachi",
      },
      {
        id: 9,
        title: "Gaming Tournament",
        date: "2025-11-02",
        poster: "https://static01.nyt.com/images/2014/08/31/technology/A1-ESPORTS-1/A1-ESPORTS-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        description: "Battle it out in an exciting eSports competition with live audience. Compete in popular games with professional teams and rising stars. Watch intense matches, enjoy gaming booths, and win exclusive prizes. Perfect for gamers and fans of competitive esports.",
        location: "Expo Center Lahore",
      },
      {
        id: 10,
        title: "New Year Gala",
        date: "2026-12-31",
        poster: "https://cdn.encoreglobal.com/wp-content/uploads/sites/2/2024/02/20105531/ATP_NYE_Sting_Fireworks_8-1.jpg",
        description: "Celebrate the New Year with music, fireworks, and unforgettable memories. Dance the night away with live DJs and performances. Enjoy gourmet dining, midnight countdown, and breathtaking fireworks. Start the year in style with friends and family.",
        location: "Beach Resort, Karachi",
      }
    ],
    tickets: JSON.parse(localStorage.getItem("tickets")) ||[
      {
        eventId: 1, 
        types: [
          { id: 1, type: "VIP", price: 5000},
          { id: 2, type: "General", price: 2000},
          { id: 3, type: "Student Pass", price: 1200},
        ],
      },
      {
      eventId: 2,
          types: [
            { id: 1, type: "Food Pass", price: 1500 },
            { id: 2, type: "All Access", price: 2500 },
            { id: 3, type: "Family Bundle (4)", price: 5000},
          ],
        },
        {
          eventId: 3,
          types: [
            { id: 1, type: "Standard", price: 3000},
            { id: 2, type: "VIP Lounge", price: 7000 },
            { id: 3, type: "Startup Booth Pass", price: 10000 },
          ],
        },
        {
          eventId: 4, 
          types: [
            { id: 1, type: "Front Row", price: 4000 },
            { id: 2, type: "Balcony", price: 2500},
            { id: 3, type: "Student Discount", price: 1500 },
          ],
        },
        {
          eventId: 5, 
          types: [
            { id: 1, type: "VIP Box", price: 8000},
            { id: 2, type: "Premium Stands", price: 4000},
            { id: 3, type: "General Stands", price: 2000 },
          ],
        },
        {
          eventId: 6, 
          types: [
            { id: 1, type: "Day Pass", price: 500},
            { id: 2, type: "Weekend Pass", price: 1200},
            { id: 3, type: "Family Pack", price: 2000 },
          ],
        },
        {
          eventId: 7, 
          types: [
            { id: 1, type: "Runway Front Row", price: 6000 },
            { id: 2, type: "General Seating", price: 3000},
            { id: 3, type: "Backstage Pass", price: 10000},
          ],
        },
        {
          eventId: 8, 
          types: [
            { id: 1, type: "VIP Table", price: 5000},
            { id: 2, type: "Standard Seat", price: 2500},
            { id: 3, type: "Group of 4", price: 8000},
          ],
        },
        {
          eventId: 9,
          types: [
            { id: 1, type: "Player Pass", price: 3000 },
            { id: 2, type: "Spectator Pass", price: 1500},
            { id: 3, type: "Team Bundle (5 Players)", price: 12000},
          ],
        },
        {
          eventId: 10, 
          types: [
            { id: 1, type: "Dinner + Party", price: 10000 },
            { id: 2, type: "Party Only", price: 5000},
            { id: 3, type: "Couple Pass", price: 15000 },
          ],
        },
    ],

    users: JSON.parse(localStorage.getItem("users")) || [
      { id: 1, name: "Umar", email: "umar12@gmail.com", phone: "03001234567", password: "0101", image: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png", role: "admin" },
      { id: 2, name: "Mariam", email: "mariam99@gmail.com", phone: "03012345678", password: "pass123", image: "https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg", role: "user" },
      { id: 3, name: "Sara Ahmed", email: "sara.ahmed@gmail.com", phone: "03211234567", password: "sara456", image: "https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg?w=360", role: "user" },
      { id: 4, name: "Bilal Sheikh", email: "bilal.sheikh@gmail.com", phone: "03331234567", password: "bilal789", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s", role: "user" },
      { id: 5, name: "Ayesha Noor", email: "ayesha.noor@gmail.com", phone: "03451234567", password: "ayesha000", image: "https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg", role: "user" }
    ],
    currentUser: null,
    purchased_tickets: [{ id: 1, eventId: 1, userId: 1, ticketType: "VIP",totalPrice: 10000, status: "confirmed" },],
    current_user: {id:1, name: "", role: "", image:""}

  },
  getters: {
    getEvents(state){
      return state.events;
    },
    getUpcomingEvents(state){
      const currentDate= new Date();
      return state.events.filter((event)=>new Date(event.date)>= currentDate);
    },
    getPurchasedTickets(state){
      return state.purchased_tickets;
    },
    getUsers(state){
      return state.users;
    },
    getTicketsByEventId: (state) => (eventId) => {
      const id = Number(eventId);
      const ticketData = state.tickets.find((t) => t.eventId === id);
      return ticketData?ticketData.types:[];
    },
    
  },
  mutations: {
    // user login and registration
    setCurrentUser(state, user) {
      state.current_user = user;
      localStorage.setItem("current_user", JSON.stringify(user));
    },
    addUser(state, user){
      state.users.push(user);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    // Ticket editing
    updateTickets(state, { eventId, updated }) {
      const id = Number(eventId);
      const ticketSet = state.tickets.find((t) => Number(t.eventId) === id);
      if (ticketSet) {
        ticketSet.types = updated.map((ticket, index)=>({
          id: ticket.id ?? (ticket.type ? index + 1 : index + 1),
          type: ticket.type,
          price: Number(ticket.price) || 0,
        }));
      } else {
          state.tickets.push({eventId: id,
            types: updated.map((ticket, index) => ({id: ticket.id ?? index + 1, type: ticket.type,price: Number(ticket.price),})),
          });
        }
        
      localStorage.setItem("tickets", JSON.stringify(state.tickets));
    },

    addTickets(state, { eventId, tickets }) {
      const id=Number(eventId);
      const ticketSet=state.tickets.find((t) => t.eventId === id);

      const ticketIds = tickets.map((t, index) => ({
        id: index + 1,
        type: t.type,
        price: Number(t.price),
      }));

      if (ticketSet) {
        ticketSet.types=ticketIds;
      } else {
        state.tickets.push({eventId: id,types: ticketIds,});
      }

      localStorage.setItem("tickets", JSON.stringify(state.tickets));
    },

    // Event Editing 
    updateEvent(state, updatedEvent) {
      const index = state.events.findIndex(e => e.id === updatedEvent.id);
      if (index !==-1) {
        state.events.splice(index, 1, updatedEvent);
        localStorage.setItem("events", JSON.stringify(state.events));
      }
    },
    setEvents(state, events) {
      state.events = events;
    },
    addEvent(state, event) {
      state.events.push(event);
      localStorage.setItem("events", JSON.stringify(state.events));
    },

    // user image and phone update
    updateUserPhone(state, { userId, phone }) {
      const user=state.users.find(u => u.id === userId);
      if (user) {
        user.phone = phone;
        localStorage.setItem("users", JSON.stringify(state.users));
      }
      if (state.current_user && state.current_user.id === userId) {
        state.current_user.phone = phone;
        localStorage.setItem("current_user", JSON.stringify(state.current_user));
      }
    },

    updateUserImage(state, { userId, image }) {
      const user = state.users.find(u => u.id === userId);
      if(user){
        user.image = image;
        localStorage.setItem("users", JSON.stringify(state.users));
      }
      if(state.current_user && state.current_user.id===userId) {
        state.current_user.image = image;
        localStorage.setItem("current_user", JSON.stringify(state.current_user));
      }
    }
  },
  actions: {
    loadEvents({ commit }) {
      const saved = localStorage.getItem("events");
      if (saved) {
        commit("setEvents", JSON.parse(saved));
      }
    }

  },
})