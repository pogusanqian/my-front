export const hunhe = {
  data() {
    return {
      country: '中国',
      name: '哈哈',
    }
  },
  methods: {
    showName() {
      console.log(this.name);
    }
  }
};

export const hunhe2 = {
  mounted() {
    console.log('混合中的mounted函数')
  },
}

export const hunhe3 = {
  created() {
    console.log('混合中的created函数')
  },
}