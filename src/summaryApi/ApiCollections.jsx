const baseUrl = 'http://localhost:8080';
const SummaryApi = {
  getAllPortfolioData: {
    url: `${baseUrl}/api/portfolio/get-all-data`,
    method: 'get',
  },
  updateIntro: {
    url: `${baseUrl}/api/portfolio/update-intro`,
    method: 'put',
  },
  updateAbout: {
    url: `${baseUrl}/api/portfolio/update-about`,
    method: 'put',
  },
  updateProject: {
    url: `${baseUrl}/api/portfolio/update-project`,
    method: 'put',
  },
  updateCourse: {
    url: `${baseUrl}/api/portfolio/update-course`,
    method: 'put',
  },
  updateContact: {
    url: `${baseUrl}/api/portfolio/update-contact`,
    method: 'put',
  },
};
export default SummaryApi;
