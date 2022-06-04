<template>
  <v-card class="mt-10">
    <v-alert type="info" prominent @click="counting">
      Selamat datang di Nggon Ngaji IAIN Salatiga
    </v-alert>
  </v-card>
</template>

<script>
import { fireSetDataWithId } from '../firebase/firestore';
export default {
  components: {},
  data() {
    return {
      profile: [
        {
          displayName: 'Auditi',
          email: 'pocary09@gmail.com',
          photoURL:
            'https://lh3.googleusercontent.com/a-/AOh14GhO0V98Rv_K4am2V6prcrKZy1zSjuO6IK24N7Ynrg=s96-c',
          token:
            'ya29.a0ARrdaM9baTYnLSi1gWDJGeJNwecmz6EaAQIsU-8cCTCGqlmdNy6z0rShZYfvt2oajA3qj8uYep_310nIrNt5hTadiWN3XxuAOuPRZqBPfHanZYqnE3D4lEemfnWRnalu1LpUN-h1zig92K6behNLHNQkbn6QOQ',
        },
        {
          displayName: 'andi semma',
          email: 'andisemma@gmail.com',
          photoURL:
            'https://lh3.googleusercontent.com/a-/AOh14GhA3vzzeB57i-YM0vd36IDyE07AcR_kP4_elhem4Q=s96-c',
          token:
            'ya29.a0ARrdaM-83kBPrAQqnELmJlWS3zh_Wc4Vyilj4GwCPcdMhtAHjfVETyxlNMkUWrj4m3UsMLH9gh6v8KUlJvAHP1CUwvvetwCV-ByFZRPzUMTsdrVaWi50Pz9oyrwqcBmXzPdDEYCB8X_F1jzfjMI3rlLRT_bV4Q',
        },
      ],
      test: false,
      count: 0,
      item: 1,
      jumlah: 0,
      data: [
        {
          NO: 1,
          NamaProduct: 'TV 32 INCH',
          Type: 'Elektronik',
          Harga: 3000000,
        },
        {
          NO: 2,
          NamaProduct: 'Kulkas 2 Pintu',
          Type: 'Elektronik',
          Harga: 1750000,
        },
        {
          NO: 3,
          NamaProduct: 'Kulkas 3 Pintu',
          Type: 'Elektronik',
          Harga: 5250000,
        },
        {
          NO: 4,
          NamaProduct: 'Beras',
          Type: 'Sembako',
          Harga: 45000,
        },
        {
          NO: 5,
          NamaProduct: 'Mesin Cuci',
          Type: 'Elektronik',
          Harga: 2100000,
        },
        {
          NO: 6,
          NamaProduct: 'Minyak',
          Type: 'Sembako',
          Harga: 12000,
        },
        {
          NO: 7,
          NamaProduct: 'Semen 3 Roda',
          Type: 'Material',
          Harga: 75000,
        },
        {
          NO: 8,
          NamaProduct: 'Pasir',
          Type: 'Material',
          Harga: 12000,
        },
        {
          NO: 9,
          NamaProduct: 'Teh Sariwangi',
          Type: 'Sembako',
          Harga: 2000,
        },
        {
          NO: 10,
          NamaProduct: 'Sabun Cuci',
          Type: 'Sembako',
          Harga: 1200,
        },
        {
          NO: 11,
          NamaProduct: 'Meja',
          Type: 'Aksesoris',
          Harga: 300000,
        },
        {
          NO: 12,
          NamaProduct: 'Lemari',
          Type: 'Aksesoris',
          Harga: 1300000,
        },
      ],
    };
  },
  methods: {
    add() {
      this.auditi.forEach((item) => {
        fireSetDataWithId('users', item.email, item);
      });
    },
    counting() {
      this.count++;
      this.count >= 5
        ? (this.test = true)
        : setTimeout(() => {
            this.count = 0;
          }, 1000);
      /*  this.test ||
        setTimeout(() => {
          this.test = false;
        }, 3000); */
    },
  },
  computed: {
    barang() {
      return this.data.find((item) => item.NO == this.item);
    },
    total() {
      return this.barang.Harga * this.jumlah;
    },
  },
  mounted() {
    console.log('Test');
  },
  created() {},
};
</script>
