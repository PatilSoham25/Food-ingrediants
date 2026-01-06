import "./Partners.css";

const partners = [
  {
    name: "Roquette",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hJEwJtVtmVg-89KTQfLNc9pEpSBGfsECtw&s",
  },
  {
    name: "Ingredion Idea Labs",
    logo: "https://nuffoodsspectrum.in/wp-content/uploads/articles/FILE_53d0cf02441fbIngredion_Idea_Big.jpg",
  },
  {
    name: "Emsland Group",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvl5X-xcUHodQIrG7VT3i730fAcE-4Fuv1g&s",
  },
  {
    name: "Azelis",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMxCNoEthr8LIxCq4Ku2artdmTL4RPsBCIQ&s",
  },
  {
    name: "Brenntag",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62sEuAYzk0iWbtXr2GiZMx9RxwcYZrD8yZw&s",
  },
  {
    name: "Diana Food",
    logo: "https://cloudfront-eu-central-1.images.arcpublishing.com/williamreed/GCRCTQ3WENK6BCWRY74PSP76DA.jpg",
  },
  {
    name: "Döhler",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPny_X6UsRZ3CYR7kkGWDf6mk_2CoWEFMCEg&s",
  },
  {
    name: "Dupont",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEWq8F-4nHpVE15KRZ5Oew-DvjePr4-9ITw&s",
  },
  {
    name: "Angel Yeast",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3h3qifJnLPWdzhgmteR3BRGkzz0ITZ7_gbQ&s",
  },
  {
    name: "Exberry",
    logo: "https://cloudfront-eu-central-1.images.arcpublishing.com/williamreed/VIQDQRGBQVNBFD36DQMNDLT3FE.jpg",
  },
];

const Partners = () => {
  return (
    <section className="partners" data-aos="fade-down">
      <span className="partners-subtitle" data-aos="fade-right">Trusted names</span>

      <h2 className="partners-title" data-aos="fade-right">Who you'll meet</h2>

      <p className="partners-desc" data-aos="fade-right">Some familiar names</p>

      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div className="partner-logo" key={index}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
