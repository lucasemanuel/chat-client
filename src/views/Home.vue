<template>
  <main>
    <header>
      <h1 class="logo">chatSocket</h1>
    </header>
    <aside class="users none">
      <span class="userLogged">@lucasemanuel</span>
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
      <h3>@soteldo</h3>
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
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
main {
  header {
    height: 64px;
    background: #982ea1;
    width: 100%;
    line-height: 64px;

    h1.logo {
      font-weight: 500;
      font-size: 28px;
      text-align: center;
    }
  }

  .conversation {
    padding: 0 10px;

    .messages {
      display: flex;
      flex-direction: column;

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
  }
}
</style>
