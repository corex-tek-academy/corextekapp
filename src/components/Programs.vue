<script setup>
import { ref, computed } from 'vue'
import progimg22 from '/src/assets/image/progimg22.jpg'
import progimg1 from '/src/assets/image/progimg1.jpg'
import proimg0 from '/src/assets/image/proimg0.jpg'


const pageSize = 3
const programs = ref([
  { id: 1, title: 'Front-End Development', img: '/progimg22.jpg', desc: 'Explore our diverse range of tech programs', duration: '8 Weeks', price: '₦65,000' },
  { id: 2, title: 'Back-End Development', img: '/progimg1.jpg', desc: 'Explore our diverse range of tech programs', duration: '12 Weeks', price: '₦75,000' },
  { id: 3, title: 'Full-Stack Development', img: '/proimg0.jpg', desc: 'Explore our diverse range of tech programs', duration: '16 Weeks', price: '₦120,000' },
  { id: 4, title: 'Mobile App Development', img: '/progimg22.jpg', desc: 'Explore our diverse range of tech programs', duration: '12 Weeks', price: '₦85,000' },
  { id: 5, title: 'Data Science', img: '/progimg22.jpg', desc: 'Explore our diverse range of tech programs', duration: '16 Weeks', price: '₦100,000' },
  { id: 6, title: 'Cybersecurity', img: '/progimg1.jpg', desc: 'Explore our diverse range of tech programs', duration: '10 Weeks', price: '₦90,000' },
  { id: 7, title: 'Cloud Computing', img: '/pro-img0.jpg', desc: 'Explore our diverse range of tech programs', duration: '14 Weeks', price: '₦110,000' },
  { id: 8, title: 'DevOps Engineering', img: '/progimg1.jpg', desc: 'Explore our diverse range of tech programs', duration: '12 Weeks', price: '₦95,000' },
  { id: 9, title: 'Artificial Intelligence', img: '/proimg0.jpg', desc: 'Explore our diverse range of tech programs', duration: '16 Weeks', price: '₦130,000' },
  { id: 10, title: 'Machine Learning', img: '/progimg22.jpg', desc: 'Explore our diverse range of tech programs', duration: '14 Weeks', price: '₦115,000' },
  { id: 11, title: 'Blockchain Development', img: '/progimg1.jpg', desc: 'Explore our diverse range of tech programs', duration: '10 Weeks', price: '₦105,000' },
  { id: 12, title: 'Internet of Things (IoT)', img: '/proimg0.jpg', desc: 'Explore our diverse range of tech programs', duration: '12 Weeks', price: '₦98,000' },

  // add more programs here if needed
])

const currentPage = ref(1)
const totalPages = computed(() => Math.max(1, Math.ceil(programs.value.length / pageSize)))
const pages = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1))
const paginatedPrograms = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const slice = programs.value.slice(start, start + pageSize)
  // debug
  // console.log('paginated slice', start, start + pageSize, slice.length)
  return slice
})

import { onMounted, watch } from 'vue'

onMounted(() => {
  console.log('Programs mounted', { totalPrograms: programs.value.length, pageSize, totalPages: totalPages.value })
})

watch(currentPage, (v) => console.log('currentPage changed', v))

function setPage(n){ currentPage.value = Math.min(Math.max(1, n), totalPages.value); console.log('setPage', currentPage.value) }
function nextPage(){ if (currentPage.value < totalPages.value){ currentPage.value++; console.log('nextPage', currentPage.value) } }
function prevPage(){ if (currentPage.value > 1){ currentPage.value--; console.log('prevPage', currentPage.value) } }
</script>

<template>
  <section class="programs container" data-component="programs">
    <div class="programs-inner">
      <div class="header">
        <h1>Our Programmes</h1>
        <p>Explore our diverse range of tech programs designed <br> to equip you with the skills needed for a successful career in technology.</p>
      </div>

      <div class="program_inner">
        <article class="program_card" v-for="program in paginatedPrograms" :key="program.id">
          <img :src="proimg0" :alt="program.title">
          <div class="card_body">
            <h4>{{ program.title }}</h4>
            <p>{{ program.desc }}</p>
            <h6>Duration: {{ program.duration }}</h6>

            <div class="card_last">
              <h5 class="Price">{{ program.price }}</h5>
              <a href="#">Enroll Now</a>
            </div>
          </div>
        </article>
      </div>

      <div class="pagination" v-if="totalPages > 1">
        <button class="page-btn" :disabled="currentPage === 1" @click="prevPage" aria-label="Previous page">Prev</button>

        <button v-for="p in pages" :key="p" class="page-number" :class="{ active: currentPage === p }" @click="setPage(p)" :aria-current="currentPage === p ? 'page' : null">{{ p }}</button>

        <button class="page-btn" :disabled="currentPage === totalPages" @click="nextPage" aria-label="Next page">Next</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Responsive Programs section */
.programs{
  padding: 32px 16px 0 16px;
}
.programs-inner{
  background-color: #0257FF13;
  border-radius: 24px;
  padding: 36px; 
  gap: 36px;
  display: flex;
  flex-direction: column;
}
/* .header{ 
  padding: 0 36px; 
} */
.header h1{ 
  margin: 0 0 8px 0; 
  /* font-size: 1.8rem;  */
  font-weight: 700;
}
.header p{ 
  margin: 0; 
}
.program_inner{
  /* padding: 36px; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.program_card{
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  border-radius: 12px;
  background: var(--bg);
  border: 1px solid rgba(2,87,255,0.06);
  padding: 16px;
  box-shadow: 0 6px 18px rgba(9,30,66,0.06);
  transition: transform .18s ease, box-shadow .18s ease;
}
.program_card:hover{ 
  transform: translateY(-6px); 
  box-shadow: 0 18px 36px rgba(2,87,255,0.12); 
}
.program_card img{ 
  width: 100%; 
  height: 96px; 
  border-radius: 8px; 
  object-fit: cover; 
  flex: 0 0 140px; 
}
.card_body{ 
  width: 100%; 
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.program_card h4{  
  margin: 0 0 6px 0;
  font-size: 1rem; 
  font-weight: 700;
}
.program_card p{ 
  color: #445262; 
  margin: 0 0 8px 0; 
  font-size: 0.95rem; 
  line-height: 1.3;
}
.program_card h6{ 
  color: var(--primary);
  margin: 0 0 12px 0; 
  font-size: 0.85rem; 
}
.card_last{ 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  gap: 12px; 
  padding: 8px;
  /* background-color: var(--accent-green-50); */
  border-radius: 8px; 
}
.Price{  
  font-weight: 700; 
  /* padding: 6px 10px;  */
  border-radius: 8px; 
  color: var(--accent-green);
  
}
.card_last a{ 
  padding: 8px 12px; 
  color: var(--primary); 
  text-decoration: none; 
  border-radius: 8px; 
  font-weight: 600; 
  transition: background .15s ease, transform .12s ease; 
  border: 1px solid var(--primary);
  /* background-color: var(--accent-green-50) */
}
.card_last a:hover{ 
  background: var(--primary);
  color: var(--light); 
  transform: translateY(-2px); 
}

/* Small screens: stack card elements */
@media (max-width: 600px){
  .program_card{ 
    flex-direction: column; 
    align-items: stretch; 
  }
  .program_card img{ 
    width: 100%; 
    height: 160px; 
    flex: none; 
  }
  .card_last{ 
    flex-direction: column; 
    align-items: stretch; 
  }
  .card_last a{ 
    width: 100%; 
    text-align: center; 
  }
}

/* Pagination styles */
.pagination{
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  /* margin-top: 16px; */
  padding-bottom: 8px;
  padding: 8px;
  background: rgba(255,255,255,0.92);
  border-radius: 10px;
  border: 1px solid rgba(33,33,33,0.04);
  box-shadow: 0 6px 18px rgba(9,30,66,0.04);
}
.page-btn{
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(33,33,33,0.08);
  background: transparent;
  cursor: pointer;
}
.page-btn[disabled]{ opacity: 0.5; cursor: not-allowed; }
.page-number{
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(33,33,33,0.06);
  background: transparent;
  cursor: pointer;
}
.page-number.active{
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

</style>