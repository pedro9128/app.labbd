<template>
  <div class="col d-flex justify-content-center">
    <el-card class="box-card">
      <div class="col">
        <router-link to="/users/new">
          <el-button
            class="float-right"
            icon="el-icon-plus"
            type="primary"
            size="medium"
            >Adicionar</el-button
          >
        </router-link>
      </div>
      <el-table :data="users" style="width: 100%">
        <el-table-column prop="name" label="Nome" width="180">
        </el-table-column>
        <el-table-column prop="age" label="Idade" width="180">
        </el-table-column>
        <el-table-column label="Ações">
          <div slot-scope="props">
            <el-button
              @click.native="handleEdit(props.$index, props.row)"
              type="text"
              size="small"
              icon
            >
              <i class="el-icon-edit"></i>
            </el-button>

            <el-button
              @click.native="handleDelete(props.$index, props.row)"
              type="text"
              size="small"
              icon
            >
              <i class="el-icon-delete"></i>
            </el-button>
          </div>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import http from "../../services/axios";
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      http
        .get("/")
        .then(res => {
          this.users = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      this.$router.push({ path: `users/${row._id}/edit` });
    },
    handleDelete(index, row) {
      this.$confirm("Não poderá voltar atrás. Tem a certeza?", "Sim", {
        distinguishCancelAndClose: true,
        confirmButtonText: "Tenho",
        cancelButtonText: "Cliquei sem querer"
      })
        .then(() => {
          this.$message({
            type: "info",
            message: "Usuário removido com sucesso."
          });
          http.delete(`/${row._id}`)
          .then(() => {
            this.fetch();
          });
        })
        .catch(action => {
          this.$message({
            type: "info",
            message:
              action === "cancel"
                ? "Ação cancelada. Nada foi feito."
                : "Stay in the current route"
          });
        });
    }
  }
};
</script>
<style lang="sass"></style>
