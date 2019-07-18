<template>
  <div>
    <el-button type="text" @click="showDialog = true">添加电影</el-button>
    <div>
      <ul>
        <li v-for="list in movieList" :key="list.id">
          <dl class="clearfix mb15">
            <dt class="col-xs-4 text-center">
              <img
                class="img-responsive"
                style="display:inline-block"
                :src="`http://localhost:3000${list.imgUrl}`"
                width="75"
                height="100"
                :alt="list.name"
              />
            </dt>
            <dd class="col-xs-8">
              <h3 class="text-nobr">
                {{list.name}}
                <small class="text-orange mlr3" v-text="list.score"></small>
              </h3>
              <p class="mt15" v-text="list.actor"></p>
              <p class="text-nobr mt10" v-text="list.describe"></p>
            </dd>
          </dl>
        </li>
      </ul>
      <el-pagination
        background
        @current-change="currentChange"
        @size-change="sizeChange"
        :total="movieTotal"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="this.pagecount"
        layout="prev, pager, next,sizes"
      ></el-pagination>
    </div>
    <el-dialog title="提示" :visible.sync="showDialog">
      <el-form ref="form" :model="movieForm" :rules="formRules" label-width="80px">
        <el-form-item label="电影名称">
          <el-input v-model="movieForm.name"></el-input>
        </el-form-item>
        <el-form-item label="演员">
          <el-input v-model="movieForm.actor"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="movieForm.start_time"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="movieForm.end_time"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="评分">
          <el-input v-model="movieForm.score"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input type="textarea" v-model="movieForm.describe"></el-input>
        </el-form-item>
      </el-form>
      <footer slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </footer>
    </el-dialog>
  </div>
</template>

<script>
import { addMovie, getMovieList } from "@/api/movie";
import { addMovieformRules as formRules } from "@/utils/validate";

export default {
  name: "TopList",
  data() {
    return {
      movieTotal: null,
      movieList: [],
      pagesize: 1,
      pagecount: 5,
      movieForm: {
        name: "电影名称",
        imgUrl: "",
        actor: "张三",
        start_time: "2019-07-11 11:38:20",
        end_time: "2019-07-11 11:38:20",
        score: "9.8",
        describe: "真的很好看，太感动了！"
      },
      formRules,
      showDialog: false
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      const result = await getMovieList({
        pagesize: (this.pagesize - 1) * this.pagecount,
        pagecount: this.pagecount
      });
      this.movieTotal = result.data.total;
      this.movieList = result.data.result;
    },
    async add() {
      const result = await addMovie(this.movieForm);
      if (result.data.code === 1) {
        this.$message.success("添加成功！");
      } else {
        this.$message.error("添加失败！");
      }
      this.showDialog = false;
    },
    sizeChange(size) {
      this.pagecount = size;
      this.getMovie();
    },
    currentChange(pagezie) {
      this.pagesize = pagezie;
      this.getMovie();
    }
  }
};
</script>

<style>
</style>