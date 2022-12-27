import './App.css';
import Navbar from './components/Navbar';
import UserProfileCard from './components/UserProfileCard';
import SiteIntro from './components/SiteIntro';
import Textform from './components/textUtils/Textform';
function App() {
  return (
   <>
<Navbar/>
<SiteIntro/>
<div className='container d-flex flex-wrap justify-content-center justify-content-lg-start'>
<UserProfileCard src="https://source.unsplash.com/random/250x250/?man,boy" title='Zacky Chayn' text="This is Zacy Chyan from Kuwait and I love reading people's mind" />
<UserProfileCard src="https://source.unsplash.com/random/250x250/?girl,female" title='Preeti Ojha' text="This is Preeti Ojha from Chautara and I love hiking tall mountains." />
<UserProfileCard src="https://source.unsplash.com/random/250x250/?male,topG" title='Pranil Shrestha' text="This is Pranil Shrestha from Thimi, Bhaktapur and I love women." />
<UserProfileCard src="https://source.unsplash.com/random/250x250/?male,boy" title='Pratik Sharma' text="This is Pratik Sharma from Syayle, Chautara and I love to talk with older women." />
<UserProfileCard src="https://source.unsplash.com/random/250x250/?female,woman" title='Suhana Singh' text="This is Suhana Singh from Mustang, Nepal and I am looking for a parter to spend my life with." />
</div>
<Textform/>
   </>
  );
}

export default App;
