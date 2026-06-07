import { chromium } from 'playwright-chromium'
const b = await chromium.launch()
const p = await b.newPage({ viewport:{width:1280,height:720} })
await p.goto('http://localhost:3056/1',{waitUntil:'networkidle'}); await p.waitForTimeout(1000)
const total = await p.evaluate(()=>window.__slidev__?.nav?.total?.value??60)
for(let i=1;i<=total;i++){
  await p.goto(`http://localhost:3056/${i}`,{waitUntil:'networkidle'}); await p.waitForTimeout(220)
  const info = await p.evaluate(()=>{
    const el=[...document.querySelectorAll('.vite-state')].find(e=>{const r=e.getBoundingClientRect();return r.width>200&&r.left>-100&&r.left<900})
    if(!el) return null
    const cs=getComputedStyle(el); const era=el.querySelector('.vite-era')
    return {display:cs.display, eraText:era?.textContent?.trim()}
  })
  if(info){ console.log(`slide ${i}:`, JSON.stringify(info)); await p.screenshot({path:`/tmp/vite-${i}.png`}) }
}
await b.close()
