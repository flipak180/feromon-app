<template>
  <ion-app>
    <Suspense>
        <ion-router-outlet />
    </Suspense>
  </ion-app>
</template>

<script setup>
import {IonApp, IonRouterOutlet} from '@ionic/vue';
</script>
