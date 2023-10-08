<template>
  <ion-app>
    <Suspense>
        <ion-router-outlet :animated="false" />
    </Suspense>
  </ion-app>
</template>

<script setup>
import {IonApp, IonRouterOutlet} from '@ionic/vue';
</script>
