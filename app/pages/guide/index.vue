<template>
  <div class="flex">
    <article class="space-y-6 p-6 w-9/12">
      <AppCard variant="subtle" id="g1" data-guide-card>
        <template #header>
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">API 呼叫方式統一 (依專案需求)</h1>
          </div>
        </template>

        <ul class="list-disc ml-4 space-y-2">
          <li>
            <div class="flex items-center gap-1">
              查詢類用<AppBadge color="info" variant="subtle" class="font-bold"
                >GET</AppBadge
              >
              ，以 Query String 傳參數
            </div>
          </li>
          <li>
            <div class="flex items-center gap-1">
              操作類用
              <AppBadge color="success" variant="subtle" class="font-bold"
                >POST</AppBadge
              >，以 Request Body 傳參數
            </div>
          </li>
        </ul>
      </AppCard>

      <AppCard variant="subtle" id="g2" data-guide-card>
        <template #header>
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">分頁格式</h1>
          </div>
        </template>
        <AppCode :code="codePage" title="GET 回傳內容" />
      </AppCard>

      <AppCard variant="subtle" id="g3" data-guide-card>
        <template #header>
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">日期與時間</h1>
          </div>
        </template>

        <ul class="list-disc ml-4 space-y-2">
          <li>
            <div class="flex items-center gap-1">
              全站統一格式，不要有的以<AppBadge
                color="info"
                variant="subtle"
                class="font-bold"
                ><span class="text-info text-base">"</span>
                <span class="text-primary text-xl">-</span>
                <span class="text-info text-base">"</span> </AppBadge
              >分隔、有的以<AppBadge
                color="info"
                variant="subtle"
                class="font-bold"
                ><span class="text-info text-base">"</span>
                <span class="text-primary text-xl">/</span>
                <span class="text-info text-base">"</span> </AppBadge
              >分隔
            </div>
          </li>
          <li>
            <div class="flex items-center gap-1">常見字串格式</div>
          </li>
        </ul>

        <div class="flex w-full gap-4 mt-2">
          <div class="w-1/2 flex flex-col gap-2">
            <AppBadge color="success" variant="subtle" class="font-bold">
              <span class="text-primary text-base"
                >使用民國年字串。(通常政府專案使用)</span
              >
            </AppBadge>
            <GuideTable
              :headers="['年', '年月', '年月日', '年月日時分', '年月日時分秒']"
              :data="[
                ['114'],
                ['114/08'],
                ['114/07/01'],
                ['114/07/01 11:16'],
                ['114/03/27 11:16:00'],
              ]"
            ></GuideTable>
          </div>
          <div class="w-1/2 flex flex-col gap-2">
            <AppBadge color="success" variant="subtle" class="font-bold">
              <span class="text-primary text-base">使用西元年字串</span>
            </AppBadge>
            <GuideTable
              :headers="['年', '年月', '年月日', '年月日時分', '年月日時分秒']"
              :data="[
                ['2025'],
                ['2025/08'],
                ['2025/07/01'],
                ['2025/07/01 11:16'],
                ['2025/03/27 11:16:00'],
              ]"
            ></GuideTable>
          </div>
        </div>
      </AppCard>

      <AppCard variant="subtle" id="g4" data-guide-card>
        <template #header>
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">多選格式</h1>
          </div>
        </template>
        <div class="flex flex-col gap-2">
          <AppCode
            :code="codeSelectPayload"
            title="前端、後端都用陣列傳遞/接收"
          />

          <div>
            <div class="title bg-gray-800 p-2 rounded-t-xl">
              <span class="font-bold">實際範例區</span>
            </div>
            <div class="bg-gray-900 p-2 overflow-auto rounded-b-xl">
              <div class="flex gap-4 flex-col">
                <div class="w-full gap-2">
                  <div class="title bg-primary/80 p-2 rounded-t-xl">
                    <span class="font-bold text-black">GET 動態選單格式</span>
                  </div>
                  <div
                    class="bg-gray-800 h-[200px] p-2 text-base rounded-b-xl flex items-center w-full"
                  >
                    <AppCode :code="codeOptions" />
                    <!-- {{ selectedOptions }} -->
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-1/3">
                    <div class="title bg-info/80 p-2 rounded-t-xl">
                      <span class="font-bold text-black">下拉選單</span>
                    </div>
                    <div
                      class="bg-gray-800 h-[100px] p-2 text-base rounded-b-xl flex items-center"
                    >
                      <FormSelect
                        v-model="selectedFruits"
                        :options="selectedOptions"
                        placeholder="選擇水果"
                        class="w-64"
                      ></FormSelect>
                    </div>
                  </div>
                  <div class="w-1/3">
                    <div class="title bg-info/80 p-2 rounded-t-xl">
                      <span class="font-bold text-black">複選框</span>
                    </div>
                    <div
                      class="bg-gray-800 h-[100px] p-2 text-base rounded-b-xl flex items-center"
                    >
                      <FormCheckboxGroup
                        v-model="selectedFruits"
                        :options="selectedOptions"
                        name="fruits"
                        class="flex gap-4"
                      />
                    </div>
                  </div>
                  <div class="w-1/3">
                    <div class="title bg-primary/80 p-2 rounded-t-xl">
                      <span class="font-bold text-black">POST回傳內容</span>
                    </div>
                    <div
                      class="bg-gray-800 h-[100px] p-2 text-base rounded-b-xl flex items-center"
                    >
                      {{ selectedFruits }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppCard>

      <AppCard variant="subtle" id="g5" data-guide-card>
        <template #header>
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">下拉選單</h1>
          </div>
        </template>

        <div class="flex w-full gap-4">
          <div class="w-1/2">
            <AppCode
              :code="codeSelect"
              title="GET 回傳內容：陣列中的每個元素都包含 value 與 label"
            />
          </div>
          <div class="w-1/2">
            <AppCode
              :code="codeSelectPayload"
              title="POST 回傳內容：只傳遞 value，避免資料不同步"
            />
          </div>
        </div>
      </AppCard>

      <AppCard variant="subtle" id="g6" data-guide-card>
        <template #header>
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">布林值</h1>
          </div>
        </template>

        <ul class="list-disc ml-4 space-y-2">
          <li>
            <div class="flex items-center gap-1">
              格式最好以真正的布林值<AppBadge
                color="info"
                variant="subtle"
                class="font-bold"
              >
                <span class="text-primary text-sm">true</span>
                /
                <span class="text-primary text-sm">false</span> </AppBadge
              >為主。
            </div>
          </li>
          <li>
            <div class="flex items-center gap-1">
              整個系統統一邏輯回傳，不要有的 API

              <AppBadge color="info" variant="subtle" class="font-bold">
                <span class="text-primary text-sm">true</span>/
                <span class="text-primary text-sm">false</span> </AppBadge
              >、有的
              <AppBadge color="info" variant="subtle" class="font-bold">
                <span class="text-error text-sm">"</span>
                <span class="text-error text-sm">0</span>
                <span class="text-error text-sm">"</span>/
                <span class="text-error text-sm">"</span>
                <span class="text-error text-sm">1</span>
                <span class="text-error text-sm">"</span> </AppBadge
              >，有的
              <AppBadge color="info" variant="subtle" class="font-bold">
                <span class="text-error text-sm">"</span>
                <span class="text-error text-sm">Y</span>
                <span class="text-error text-sm">"</span>/
                <span class="text-error text-sm">"</span>
                <span class="text-error text-sm">N</span>
                <span class="text-error text-sm">"</span>
              </AppBadge>
            </div>
          </li>
        </ul>
      </AppCard>

      <AppCard variant="subtle" id="g7" data-guide-card>
        <template #header>
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">檔案上傳</h1>
          </div>
        </template>

        <ul class="list-disc ml-4 space-y-2">
          <li>
            <div class="flex items-center gap-1">
              FormData：支援多種資料類型、除檔案外有其他表單資料以
              <AppBadge color="info" variant="subtle" class="font-bold">
                <span class="text-primary text-sm">file</span> </AppBadge
              >、<AppBadge color="info" variant="subtle" class="font-bold">
                <span class="text-primary text-sm">json</span> </AppBadge
              >分別包裝
            </div>
          </li>
          <AppCode :code="codeUpload" />

          <li>
            <div class="flex items-center gap-1">
              Base64：適合小型檔案，將檔案轉為字串格式
            </div>
          </li>
        </ul>
      </AppCard>

      <AppCard variant="subtle" id="g8" data-guide-card>
        <template #header>
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">檔案下載</h1>
          </div>
        </template>

        <ul class="list-disc ml-4 space-y-2">
          <li>
            <div class="flex items-center gap-1">
              Base64：
              可以回傳除檔案外的其他資料，如檔名。但檔案會變大33%、記憶體負擔較大
            </div>
          </li>
          <AppCode :code="codeDodownload" />

          <li>
            <div class="flex items-center gap-1">
              application/octet-stream：適合大型檔案下載(需要額外處理 response
              header Content-Disposition
              來取得檔名)，效能最佳、支援大檔案、下載體驗好，但無法回傳其他資料
            </div>
          </li>
        </ul>
      </AppCard>

      <AppCard variant="subtle" id="g9" data-guide-card>
        <template #header>
          <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">其他常見問題</h1>
          </div>
        </template>

        <ul class="list-disc ml-4 space-y-2">
          <li>
            <div class="flex items-center gap-1">
              整套 CRUD keyname 需保持一致，以下為不相同的不良範例:
            </div>
          </li>
          <div class="flex w-full gap-4">
            <div class="w-1/2">
              <AppCode :code="codeGetRes" :title="'GET 回傳內容'" />
            </div>
            <div class="w-1/2">
              <AppCode :code="codePostPayload" :title="'POST 回傳內容'" />
            </div>
          </div>
        </ul>
      </AppCard>
    </article>

    <aside class="hidden lg:block w-3/12">
      <nav class="sticky top-6 text-sm">
        <p class="mb-3 font-semibold text-gray-900 dark:text-white">
          前後端資料格式
        </p>

        <ul class="space-y-4">
          <li v-for="group in guideList" :key="group.title">
            <!-- <p class="text-gray-500 font-semibold">{{ group.title }}</p> -->

            <ul class="ml-4 mt-1 space-y-1">
              <li v-for="item in group.items" :key="item.id">
                <ULink
                  :to="`#${item.id}`"
                  @click.prevent="scrollTo(item.id)"
                  :class="{
                    block: true,
                    'text-primary font-semibold': activeId === item.id,
                    'text-gray-400 hover:text-primary': activeId !== item.id,
                  }"
                >
                  {{ item.label }}
                </ULink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script setup>
import GuideTable from "./components/Table.vue";

const codePage = `{
  "statusCode": "200",
  "message": "執行成功",
  "subMessage": "列表資料取得成功" // 如果需要的話
  "data": {
    "page": 1,
    "size": 10,
    "total": 35,
    "totalPages": 4,
    "content": [ {id: XXX, ...}... ] // 裡面一定要有id，前端要拿來查看或編輯
    }
}`;

const codeSelect = `{
  "statusCode": "200",
  "message": "執行成功",
  "subMessage": "列表資料取得成功" // 如果需要的話
  "data": [
	    {
	      "label": "瀏覽",
	      "value": "view"
	    },
	    {
	      "label": "編輯",
	      "value": "edit"
	    }
	]
]`;

const codeSelectPayload = `{ permission: ["view", "edit"] }`;

const codeUpload = `const formData = new FormData()
formData.append('file', file)
formData.append('json',
  new Blob([JSON.stringify({ data: params })], {
    type: 'application/json',
  }),
)`;

const codeDodownload = `{
    "statusCode": "200",
    "messageCode": null,
    "message": "執行成功",
    "data": {
        "exportFileData": "77u/LCwsLCzlpKfkuovntIDos4fmlpnmmI....,
        "exportFileName": "資料表.csv",
    }
}`;

const codeGetRes = `{
  "statusCode": "200",
  "message": "執行成功",
  "data": {
    "!!name": "John Doe",
    "!!age": 30,
    "!!email": "xxx@gmail.com"
}`;

const codePostPayload = `{
    "!!userName": "John Doe",
    "!!userAge": 30,
    "!!userEmail": "xxx@gmail.com"
}`;

const codeOptions = `[
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
]`;

const guideList = [
  {
    title: "前後端資料格式",
    items: [
      { id: "g1", label: "API 呼叫方式統一 (依專案需求)" },
      { id: "g2", label: "分頁格式" },
      { id: "g3", label: "日期與時間" },
      { id: "g4", label: "多選格式" },
      { id: "g5", label: "下拉選單" },
      { id: "g6", label: "布林值" },
      { id: "g7", label: "檔案上傳" },
      { id: "g8", label: "檔案下載" },
      { id: "g9", label: "其他常見問題" },
    ],
  },
];

const selectedFruits = ref([]);
const selectedOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

const activeId = ref(null);
const headings = ref([]);
let observer;

onMounted(() => {
  if (!("IntersectionObserver" in window)) return;

  headings.value = Array.from(
    document.querySelectorAll("article > .u-card[data-guide-card]")
  );

  if (!headings.value.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible[0]) {
        activeId.value = visible[0].target.id;
      }
    },
    { rootMargin: "0px 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  headings.value.forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => {
  observer?.disconnect();
});

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  activeId.value = id;
};
</script>
