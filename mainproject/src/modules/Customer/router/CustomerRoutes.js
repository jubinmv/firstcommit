import Customer from "@/modules/Customer/Customer.vue"
import CustomerDashboard from "@/modules/Customer/views/DashboardCustomer.vue"
import CustomerProfile from "@/modules/Customer/views/ProfileCustomer.vue";
import CustomerTransactions from "@/modules/Customer/views/TransactionsCustomer.vue";
import CustomerLog from "@/modules/Customer/views/LogCustomer.vue";
import Land from "@/modules/Customer/views/Land.vue";
import CustomerSettings from "@/modules/Customer/views/SettingsCustomer.vue";
import Farmerslist from "@/modules/Customer/views/Farmerslist.vue";
import Landownerslist from "@/modules/Customer/views/Landownerslist.vue";
import Leasedlands from "@/modules/Customer/views/Leasedlands.vue";
import Farmland from "@/modules/Customer/views/Farmland.vue";
import Agreement from "@/modules/Customer/views/Agreement.vue";
import pdfgen from "@/modules/Customer/views/pdfgen.vue";


export const customerRoutes = [
  {
    path: "/customer",
    component: Customer,
    children: [
      {
        path: "",
        name: "customer-dashboard",
        components: {
          customerPage: CustomerDashboard,
        },
      },
      // {
      //   path: "dashboard",
      //   name: "customer-dashboard",
      //   components: {
      //     customerPage: CustomerDashboard,
      //   },
      // },
      {
        path: "profile",
        name: "customer-profile",
        components: {
          customerPage: CustomerProfile,
        },
      },
      {
        path: "transactions",
        name: "customer-transactions",
        components: {
          customerPage: CustomerTransactions,
        },
      },
      {
        path: "log",
        name: "customer-log",
        components: {
          customerPage: CustomerLog,
        },
      },
      {
        path: "Land",
        name: "Land",
        components: {
          customerPage: Land,
        },
      },
      {
        path: "pdfgen",
        name: "pdfgen",
        components: {
          customerPage: pdfgen,
        },
      },
      {
        path: "Farmland",
        name: "Farmland",
        components: {
          customerPage: Farmland,
        },
      },
      {
        path: "Agreement",
        name: "Agreement",
        components: {
          customerPage: Agreement,
        },
      },
      {
        path: "Farmerslist",
        name: "Farmerslist",
        components: {
          customerPage: Farmerslist,
        },
      },
      {
        path: "Landownerslist",
        name: "Landownerslist",
        components: {
          customerPage: Landownerslist,
        },
      },
      {
        path: "Leasedlands",
        name: "Leasedlands",
        components: {
          customerPage: Leasedlands,
        },
      },
      {
        path: "settings",
        name: "customer-settings",
        components: {
          customerPage: CustomerSettings,
        },
      },
    ],
  },
];
