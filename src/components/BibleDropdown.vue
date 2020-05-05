<template>
  <div class="container mt-5">
    <div class="text-center">
      <form>
        <div class="form-group row">
          <div class="col-sm-12">
            <h3>Choose Version</h3>
            <select
              id="from"
              :placeholder="'Select currency'"
              v-model="dataDetails"
              class="form-control"
              @change="OnChange($event)"
            >
              <option
                :value="{
                  AmericanStandardVersion: myBooks.AmericanStandardVersion
                }"
                >{{ myBooks.AmericanStandardVersion }}</option
              >
              <option
                :value="{
                  EnglishStandardVersion: myBooks.EnglishStandardVersion
                }"
                >{{ myBooks.EnglishStandardVersion }}</option
              >
              <option
                :value="{
                  KingJamesVersion: myBooks.KingJamesVersion
                }"
                >{{ myBooks.KingJamesVersion }}</option
              >
            </select>
          </div>
        </div>
        <div class="form-group row" v-if="dataDetails">
          <div class="col-sm-12">
            <h3>Choose Scripture</h3>
            <select
              id="AmericanStandardVersion"
              :placeholder="'Select Version'"
              v-model="AmericanStandardVersionModel"
              class="form-control"
              v-if="dataDetails.AmericanStandardVersion"
            >
              <option
                :value="{ VerseId: Book.VerseId, Scripture: Book.Scripture }"
                v-for="(Book, index) in AmericanStandardVersion"
                :key="index"
              >
                {{ Book.VerseId }}
              </option>
            </select>
            <select
              id="EnglishStandardVersion"
              :placeholder="'Select Version'"
              v-model="EnglishStandardVersionModel"
              class="form-control"
              v-if="dataDetails.EnglishStandardVersion"
            >
              <option
                :value="{ VerseId: Book.VerseId, Scripture: Book.Scripture }"
                v-for="(Book, index) in EnglishStandardVersion"
                :key="index"
              >
                {{ Book.VerseId }}
              </option>
            </select>
            <select
              id="KingJamesVersion"
              :placeholder="'Select Version'"
              v-model="KingJamesVersionModel"
              class="form-control"
              v-if="dataDetails.KingJamesVersion"
            >
              <option
                :value="{ VerseId: Book.VerseId, Scripture: Book.Scripture }"
                v-for="(Book, index) in KingJamesVersion"
                :key="index"
              >
                {{ Book.VerseId }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12">
            <h4
              class="AmericanStandardVersion"
              v-if="AmericanStandardVersionModel"
            >
              {{ AmericanStandardVersionModel.Scripture }}
            </h4>
            <h4
              class="EnglishStandardVersion"
              v-if="EnglishStandardVersionModel"
            >
              {{ EnglishStandardVersionModel.Scripture }}
            </h4>
            <h4 class="KingJamesVersion" v-if="KingJamesVersionModel">
              {{ KingJamesVersionModel.Scripture }}
            </h4>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AmericanStandardVersion from "../data/AmericanStandardVersion.json";
import EnglishStandardVersion from "../data/EnglishStandardVersion.json";
import KingJamesVersion from "../data/KingJamesVersion.json";
//import $ from "jquery";
export default {
  computed: {
    AmericanStandardVersion() {
      const arr = AmericanStandardVersion.AmericanStandardVersion.map(r => ({
        VerseId: r.VerseId,
        Scripture: r.Scripture
      }));
      return arr;
    },
    EnglishStandardVersion() {
      const arr = EnglishStandardVersion.EnglishStandardVersion.map(r => ({
        VerseId: r.VerseId,
        Scripture: r.Scripture
      }));
      return arr;
    },
    KingJamesVersion() {
      const arr = KingJamesVersion.KingJamesVersion.map(r => ({
        VerseId: r.VerseId,
        Scripture: r.Scripture
      }));
      return arr;
    }
  },
  data() {
    return {
      myBooks: {
        AmericanStandardVersion: "American Standard Version",
        EnglishStandardVersion: "English Standard Version",
        KingJamesVersion: "King James Version"
      },
      dataDetails: "",
      AmericanStandardVersionModel: "",
      EnglishStandardVersionModel: "",
      KingJamesVersionModel: ""
    };
  },
  methods: {
    OnChange(event) {
      // eslint-disable-next-line no-console
      console.log(event.target.value);
      this.AmericanStandardVersionModel = "";
      this.EnglishStandardVersionModel = "";
      this.KingJamesVersionModel = "";
    }
  },
  name: "BibleDropdown"
};
</script>
<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style scoped>
::-webkit-input-placeholder {
  font-style: italic;
}
:-moz-placeholder {
  font-style: italic;
}
::-moz-placeholder {
  font-style: italic;
}
:-ms-input-placeholder {
  font-style: italic;
}
.form-group {
  width: 50%;
}
</style>
