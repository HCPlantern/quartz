
import { QuartzComponentConstructor } from "./types"

interface Options {
    links: Record<string, string>
}

export default (() => {
    function Comment() {
        return (
            <script src="https://giscus.app/client.js"
                data-repo="hcplantern/quartz"
                data-repo-id="R_kgDOKMSueg"
                data-category="Announcements"
                data-category-id="DIC_kwDOKMSues4CcOwa"
                data-mapping="pathname"
                data-strict="0"
                data-reactions-enabled="1"
                data-emit-metadata="0"
                data-input-position="top"
                data-theme="preferred_color_scheme"
                data-lang="zh-CN"
                data-loading="lazy"
                crossorigin="anonymous"
                async>
            </script>
        )
    }
    return Comment
}) satisfies QuartzComponentConstructor