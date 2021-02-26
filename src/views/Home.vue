<template>
  <main>
    <header>
      <h1 class="logo">ChatWebSocket</h1>
    </header>
    <aside class="users">
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

<style lang="scss"></style>
