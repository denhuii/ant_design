<template>
  <div class="container">
    <div class="container_box">
      <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="['userName', { rules: [{ required: true, message: 'Please input your username!' }] }]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="['password', { rules: [{ required: true, message: 'Please input your Password!' }] }]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            Remember me
          </a-checkbox>
          <a class="login-form-forgot" href="">
            Forgot password
          </a>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
          Or
          <a href="">
            register now!
          </a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 0;
  width: 100%;
  bottom: 0;
  background-image: url("../../static/img/bgc1.jpg");
  background-size: cover;
  background-position: center 0;
  .container_box {
    background-color: #fff;
    // width: 800px;
    height: 500px;
    position: absolute;
    right: 100px;
    top: 100px;
    // opacity: 0.5;
    box-shadow: 10px 5px 5px black;
    #components-form-demo-normal-login .login-form {
      // max-width: 300px;
      padding: 20px;
    }
    #components-form-demo-normal-login .login-form-forgot {
      float: right;
    }
    #components-form-demo-normal-login .login-form-button {
      width: 100%;
    }
  }
}
</style>
