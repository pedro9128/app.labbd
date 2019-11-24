<template>
  <div class="col d-flex justify-content-center">
    <el-card class="box-card">
      <div class="row">
        <div class="col">
          <el-button
            @click="goBack"
            class="float-left"
            icon="el-icon-arrow-left"
            type="text"
            >Voltar</el-button
          >
        </div>
      </div>
      <el-form
        label-position="top"
        label-width="100px"
        ref="ruleForm"
        :rules="rules"
        :model="user"
        @submit.prevent
      >
        <el-form-item prop="name" label="Nome">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item prop="age" label="Idade">
          <el-input
            min="1"
            maxlength="3"
            oninput="this.value=this.value.slice(0,this.maxLength)"
            type="number"
            v-model="user.age"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button
        class="float-right mb-3"
        type="primary"
        icon="el-icon-check"
        size="medium"
        @click="submitForm('ruleForm')"
        >Salvar</el-button
      >
    </el-card>
  </div>
</template>
<script>
import http from "../../services/axios";
export default {
  data() {
    return {
      user: {
        name: "",
        age: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "O campo nome é obrigatório!",
            trigger: "blur"
          }
        ],
        age: [
          {
            required: true,
            message: "O campo idade é obrigatório!",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      if (this.$route.params.id) {
        let id = this.$route.params.id;
        http
          .get(`/${id}`)
          .then(res => {
            this.user = {
              name: res.data.name,
              age: res.data.age
            };
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.$route.params.id) {
            let id = this.$route.params.id;
            http
              .put(`/${id}`, this.user)
              .then(res => {
                alert("Alterado com sucesso!");
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            http
              .post("/", this.user)
              .then(() => {
                alert("Inserido com sucesso!");
              })
              .catch(err => {
                console.log(err);
              });
          }
        } else {
          alert("Preencha todos os campos!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="sass"></style>
