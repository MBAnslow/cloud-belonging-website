export type Reference = {
  key: string;
  citation: string;
  url?: string;
  theme: 'Belonging' | 'Mindfulness & groups' | 'Art, ritual & experience' | 'Interactive technology';
};

export const references: Reference[] = [
  {
    key: 'allen2020',
    theme: 'Belonging',
    citation: 'Allen, K.-A. (2020). The Psychology of Belonging. Routledge.',
    url: 'https://www.taylorfrancis.com/books/9781000192896',
  },
  {
    key: 'baumeister1995',
    theme: 'Belonging',
    citation:
      'Baumeister, R. F., & Leary, M. R. (1995). The need to belong: Desire for interpersonal attachments as a fundamental human motivation. Psychological Bulletin, 117(3), 497–529.',
    url: 'https://doi.org/10.1037/0033-2909.117.3.497',
  },
  {
    key: 'walton2011',
    theme: 'Belonging',
    citation:
      'Walton, G. M., & Cohen, G. L. (2011). A brief social-belonging intervention improves academic and health outcomes of minority students. Science, 331(6023), 1447–1451.',
    url: 'https://doi.org/10.1126/science.1198364',
  },
  {
    key: 'fagioli2023',
    theme: 'Mindfulness & groups',
    citation:
      'Fagioli, S., Pallini, S., Mastandrea, S., & Barcaccia, B. (2023). Effectiveness of a brief online mindfulness-based intervention for university students. Mindfulness.',
    url: 'https://doi.org/10.1007/s12671-023-02128-1',
  },
  {
    key: 'wyatt2014',
    theme: 'Mindfulness & groups',
    citation:
      'Wyatt, C., Harper, B., & Weatherhead, S. (2014). The experience of group mindfulness-based interventions for individuals with mental health difficulties: A meta-synthesis. Psychotherapy Research.',
    url: 'https://doi.org/10.1080/10503307.2013.864788',
  },
  {
    key: 'kok2017',
    theme: 'Mindfulness & groups',
    citation:
      'Kok, B. E., & Singer, T. (2017). Effects of contemplative dyads on engagement and perceived social connectedness over 9 months of mental training: A randomized clinical trial. JAMA Psychiatry.',
    url: 'https://doi.org/10.1001/jamapsychiatry.2016.3360',
  },
  {
    key: 'turbay2022',
    theme: 'Art, ritual & experience',
    citation: 'Malaver Turbay, S. (2022). Exploring Consciousness Through Ritual Media [Doctoral dissertation].',
  },
  {
    key: 'loppenthin2022',
    theme: 'Art, ritual & experience',
    citation:
      'Løppenthin, A., Jensen, D. B., Vesper, C., Roepstorff, A., & Dumit, J. (2022). Sharing Perspectives: Inviting playful curiosity into museum spaces through a performative score. Frontiers in Psychology.',
    url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.825625/full',
  },
  {
    key: 'heimann2021',
    theme: 'Art, ritual & experience',
    citation:
      'Heimann, K. (2021). Experiencing Life — a micro-phenomenological intervention into Olafur Eliasson’s Life, Fondation Beyeler.',
    url: 'https://www.eer.info/activities/experiencing-life',
  },
  {
    key: 'jiang2025',
    theme: 'Art, ritual & experience',
    citation:
      'Jiang, X., Wu, Q., Jia, Q., & Jiang, Z. (2025). Research on the influential elements of user-centred digital art design for public space. Scientific Reports.',
    url: 'https://www.nature.com/articles/s41598-025-99821-z',
  },
  {
    key: 'kitson2018',
    theme: 'Interactive technology',
    citation:
      'Kitson, A., Prpa, M., & Riecke, B. E. (2018). Immersive interactive technologies for positive change: A scoping review and design considerations. Frontiers in Psychology.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6085587/',
  },
  {
    key: 'sliwinski2017',
    theme: 'Interactive technology',
    citation:
      'Sliwinski, J., Katsikitis, M., & Jones, C. (2017). A review of interactive technologies as support tools for the cultivation of mindfulness. Mindfulness.',
    url: 'https://doi.org/10.1007/s12671-017-0698-x',
  },
  {
    key: 'carbajal2025',
    theme: 'Interactive technology',
    citation:
      'Luque Carbajal, M., & Baranauskas, M. C. C. (2025). Enactive interaction in support of creative learning: A systematic literature review. International Journal of Human–Computer Interaction.',
    url: 'https://doi.org/10.1080/10447318.2024.2353425',
  },
  {
    key: 'wyber2022',
    theme: 'Interactive technology',
    citation: 'Wyber, A. (2022). A mindfulness toolkit for designers to enhance insight [Master’s thesis]. TU Delft.',
    url: 'https://repository.tudelft.nl/record/uuid:ce69ea14-3cf1-4a84-a0fb-50468282f17b',
  },
];
