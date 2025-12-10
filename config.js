// 博客系统配置文件
const CONFIG = {
  // 当前是否使用模拟数据
  USE_MOCK_DATA: true,
  
  // Conapi CMS API 基础URL (当USE_MOCK_DATA为false时使用)
  API_BASE_URL: 'https://api.conapi.jinshi.group',
  
  // 博客相关信息的API端点
  ENDPOINTS: {
    // 获取文章列表
    ARTICLES: '/articles'
  },
  
  // 默认设置
  DEFAULTS: {
    // 每页文章数
    ARTICLES_PER_PAGE: 10
  }
};

export default CONFIG;