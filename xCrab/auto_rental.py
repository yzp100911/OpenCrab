from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    # 启动 Chromium 浏览器（有头模式，方便看到操作过程）
    browser = p.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    
    # 打开目标网站
    page.goto("https://gez.dongguanbank.cn/landlord/#/house/index")
    page.wait_for_timeout(2000)
    
    # 登录
    page.get_by_placeholder("请输入手机号").fill("18122859721")
    page.get_by_placeholder("请输入密码").fill("100911yzp@")
    page.get_by_role("button", name="登录").click()
    page.wait_for_timeout(3000)
    
    # 点击左侧"房源"菜单
    page.get_by_text("房源").first.click()
    page.wait_for_timeout(2000)
    
    # 截图查看页面
    page.screenshot(path="rental_status.png", full_page=True)
    
    print("页面已截图保存为 rental_status.png")
    
    browser.close()
