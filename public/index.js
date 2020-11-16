const query = `
{
    user(login:"efe-osa"){
    avatarUrl
    bio
    bioHTML
    email
    followers{
      totalCount
    }
    following{
      totalCount
    }
    login
    repositories{
      totalCount
    }
    repositoriesContributedTo(first:20){
     __typename
      totalCount
      nodes{
        id
        name
      }
    }
  }
}
`;

const hamburgerMenuBtn = document.querySelector('.header__menu-btn');
const hamburgerMenu = document.querySelector('.header__dropdown');
const openMenu = () => {
  hamburgerMenu.classList.toggle('d-none');
};

hamburgerMenuBtn.addEventListener('click', openMenu);
