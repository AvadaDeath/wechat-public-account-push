/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    // 自定义，随便怎么填，与config里的templateId对应
    id: '0001',
    // 模板标题，会展示到推送消息的标题位置
    title: '今天也要元气满满啊!!!!!',
    // 模板内容，支持部分markdown语法
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      {{notice.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
            
      {{earthy_love_words.DATA}}
      
      ---
      
      {{comprehensive_horoscope.DATA}}
      
      {{moment_copyrighting.DATA}}
      
      ---
            
      {{poetry_title.DATA}} {{poetry_author.DATA}}
      
      {{poetry_content.DATA}}
      
      ---
      
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
  {
    id: '0003',
    title: '视察猪宝',
    desc: `
    {{date.DATA}} 
    城市：{{city.DATA}} 
    天气：{{weather.DATA}} 
    最低气温: {{min_temperature.DATA}} 
    最高气温: {{max_temperature.DATA}} 
    今天是我们恋爱的第{{love_day.DATA}}天
    今天是我们结婚的第{{marry_day.DATA}}天

    {{birthday_message.DATA}}

    {{one_talk.DATA}} -- {{talk_from.DATA}}

    {{note_en.DATA}} 
    {{note_ch.DATA}}
  `

  },
]

module.exports = TEMPLATE_CONFIG
