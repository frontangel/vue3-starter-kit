<script lang="ts" setup>
</script>

<template>
  <div class="">
    <h4>Clone the project</h4>
    <code-snippet language="bash" text="Step 1" code="git clone git@github.com:AngelSlava/vue-vite-ts.git"/>

    <h4>Project Architecture:</h4>
    <ul class="project-architecture">
      <li><b>api</b> - for storing code that interacts with external APIs.
        <ul>
          <li><b>mock</b> - for simulating API responses during development or testing.</li>
        </ul>
      </li>
      <li><b>assets</b> -
        <ul>
          <li><b>fonts</b> - </li>
          <li><b>icons</b> - </li>
          <li><b>img</b> - </li>
          <li><b>svg</b> - </li>
        </ul>
      </li>
      <li><b>components</b> -
        <ul>
          <li><b>common</b> - </li>
          <li><b>features</b> - </li>
        </ul>
      </li>
      <li><b>interfaces</b> - </li>
      <li><b>layouts</b> - </li>
      <li><b>plugins</b> - </li>
      <li><b>router</b> -
        <ul>
          <li><b>middleware</b> - </li>
          <li><b>parts</b> - </li>
        </ul>
      </li>
      <li><b>store</b> - </li>
      <li><b>styles</b> - </li>
      <li><b>utils</b> - </li>
      <li><b>views</b> - </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.project-architecture {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0 0 0 1rem;
  li {
    > ul {
      list-style: none;
      padding: 0 0 0 2rem;
      li {
        b {
          font-style: italic;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
