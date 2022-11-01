<template>
  <div id="navigation" class="navigation">
    <input id="navi-toggle" type="checkbox" class="navigation__checkbox">

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">
      &nbsp;
    </div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <NuxtLink to="#" class="navigation__link">
            about us
          </NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="#" class="navigation__link">
            our services
          </NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="#" class="navigation__link">
            how we work
          </NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="#" class="navigation__link">
            carrers
          </NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="#" class="navigation__link">
            blog
          </NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="#" class="navigation__link">
            contact
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: block;

  @media only screen and (min-width: 1024px) {
    display: none;
  }

  &__checkbox {
    display: none;
  }

  &__button {
    background-color: #ffffff;
    height: 2rem;
    width: 2rem;
    position: fixed;
    top: 20px;
    right: 30px;
    z-index: 3000;
    text-align: center;
    cursor: pointer;
  }

  &__background {
    height: 3rem;
    width: 3rem;
    position: fixed;
    top: 12px;
    right: 22px;
    background-color: #ffffff;
    border-radius: 100%;
    z-index: 2000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 2000;

    opacity: 0;
    width: 100%;
    transition: opacity 0.8s ease-in-out,
      right 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &__list {
    position: absolute;
    top: 70px;
    list-style: none;
    text-align: center;
    width: 100%;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 1rem;
      font-weight: 600;
      padding: .75rem 2rem;
      color: theme('colors.gray.600');
      text-decoration: none;
      text-transform: uppercase;
      background-size: 220%;

      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }

    &:hover,
    &:active {
      color: theme('colors.gray.900');
    }
  }

  // FUNCTIONALITY
  &__checkbox:checked ~ &__background {
    transform: scale(80);
  }

  &__checkbox:checked ~ &__nav {
    opacity: 1;
    right: 0;
  }

  // ICON
  &__icon {
    position: relative;
    margin-top: 15px;
    width: 1.75rem;
    height: 2px;
    background-color: theme('colors.gray.900');
    display: inline-block;

    &::before,
    &::after {
      width: 1.75rem;
      height: 2px;
      background-color: theme('colors.gray.900');
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.5rem;
    }
    &::after {
      top: 0.5rem;
    }
  }

  &__button:hover &__icon::before {
    top: -.7rem;
  }

  &__button:hover &__icon::after {
    top: .7rem;
  }

  &__checkbox:checked + &__button &__icon {
    background-color: transparent;
  }

  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
}
</style>
