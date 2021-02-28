<template>
  <main>
    <header>
      <span v-on:click="toggleMenu">menu</span>
      <h1 class="logo">chatSocket</h1>
    </header>
    <aside class="menu" v-bind:class="{ none: hideMenu }">
      <p class="userLogged">@lucasemanuel</p>
      <ul>
        <li>@soteldo</li>
        <li>@lucasverissimo</li>
        <li>@marinho</li>
      </ul>
      <footer>
        <span>Exit</span>
      </footer>
    </aside>
    <section class="conversation">
      <h3 class="userConversation">@soteldo</h3>
      <div class="messages">
        <p class="message me">
          Opa, como vai?
        </p>
        <p class="message him">
          Bien, e usted?
        </p>
        <p class="message me">
          Bem, mas poderia ta melhor se o santos fosse tetra da liberta.
        </p>
        <p class="message him">
          Não deu, fica para a próxima.
        </p>
      </div>
      <form>
        <input type="text" />
        <button type="submit"></button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      hideMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.hideMenu = !this.hideMenu
    }
  }
}
</script>

<style lang="scss">
$media-tablet: 786px;

main {
  height: 100vh;

  header {
    display: flex;
    height: 64px;
    line-height: 64px;
    width: 100%;
    background: #1d7e71;
    grid-area: header;

    h1.logo {
      font-weight: 500;
      font-size: 28px;
      text-align: center;
    }

    span {
      @media (min-width: $media-tablet) {
        display: none;
      }
    }
  }

  aside.menu {
    background: #e7f3f1;
    position: absolute;
    height: calc(100vh - 64px);
    width: 100%;
    grid-area: menu;

    .userLogged {
      height: 32px;
      line-height: 32px;
      background: #299c8d;
    }

    ul li {
      height: 80px;
      line-height: 80px;
      border-bottom: 2px solid #ddd;
    }

    @media (min-width: $media-tablet) {
      position: static;
      display: block;
      background: #45ecd1;
    }
  }

  .conversation {
    grid-area: conversation;

    :not(.userConversation) {
      padding: 0 12px;
    }

    .userConversation {
      height: 36px;
      line-height: 36px;
      background: #299c8d;
      font-weight: 500;
      text-align: center;
    }

    .messages {
      display: flex;
      flex-direction: column;
      margin: 18px 0;
      height: calc(100vh - 64px - 36px - 36px - 52px);
      overflow: auto;

      .message {
        display: flex;
        border-radius: 16px;
        width: fit-content;
        padding: 12px;

        &:not(:last-of-type) {
          margin-bottom: 12px;
        }

        &.me {
          background: #ddd;
          border-bottom-right-radius: 0;
          text-align: right;
          align-self: flex-end;
          margin-left: 12%;
        }

        &.him {
          background: royalblue;
          border-top-left-radius: 0;
        }
      }
    }

    form {
      height: 52px;
      display: flex;
      align-items: center;
      background: #299c8d;

      input {
        height: 36px;
        padding: 0 16px;
        border-radius: 999px;
        flex: 1;
        margin-right: 8px;
        font-size: 16px;
      }

      button {
        width: 36px;
        height: 36px;
        border-radius: 999px;

        &::after {
          content: '>';
          text-align: center;
        }
      }
    }
  }

  @media (min-width: $media-tablet) {
    display: grid;
    grid-template-areas:
      'header header'
      'menu conversation';
    grid-template-columns: 360px auto;
    grid-auto-columns: 100px;
  }
}
</style>
