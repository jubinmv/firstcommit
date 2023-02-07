<template>
  <div class="tile is-ancestor">
    <ShopDashboardCard data="My Listings" />
    <ShopDashboardCard data="Trade" />
    <ShopDashboardCard data="Sellers Plan" />
  </div>

  <div class="tile is-ancestor">
    <ShopDashboardCard data="Sellers Guide" />
    <ShopDashboardCard data="My Wallet" />
    <ShopDashboardCard data="Offered" />
  </div>
</template>

<script>
import ShopDashboardCard from "@/modules/Shop/components/ShopDashboardCard.vue";

export default {
  components: {
    ShopDashboardCard,
  },
};
</script>
