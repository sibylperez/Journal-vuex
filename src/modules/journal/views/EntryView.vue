<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-1 fs-4 fw-light">{{ yearDay }}</span>
            </div>

            <div>
                <input type="file" @change="onSelectedImage" ref="imageSelector" v-show="false"
                    accept="image/png, image/jpg, image/jpeg">
                <button v-if="entry.id" class="btn btn-info mx-2" @click="deleteEntryId">
                    Delete
                    <i class="fa fa-trash-alt"></i>
                </button>

                <button class="btn btn-primary" @click="selectImage">
                    Upload picture
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>

        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea name="" id="" cols="30" rows="10" placeholder="Tell me your point of view today"
                v-model="entry.text"></textarea>
        </div>
        <img v-if="entry.picture && !localImage" :src="entry.picture" alt="entry-picture" class="img-thumbnail">
        <img v-if="localImage" :src="localImage" alt="entry-picture" class="img-thumbnail">
    </template>
    <Fab icon='fa-save' @on:click="saveEntry" />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'
import getTodayDate from '../components/helpers/getTodayDate'
import uploadImage from '../components/helpers/uploadImage'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            entry: null,
            localImage: null,
            file: null
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },
    computed: {
        ...mapGetters('journal', ['getEntriesById']),
        day() {
            const { day } = getTodayDate(this.entry.date)
            return day
        },
        month() {
            const { month } = getTodayDate(this.entry.date)
            return month
        },
        yearDay() {
            const { yearDay } = getTodayDate(this.entry.date)
            return yearDay
        }
    },
    methods: {
        ...mapActions('journal', ['updatedEntry', 'createEntry', 'deleteEntry']),

        loadEntry() {
            let entry
            if (this.id === 'new') {
                entry = {
                    text: 'Tell me your point of view today...',
                    date: new Date().getTime()
                }
            } else {
                entry = this.getEntriesById(this.id)
                if (!entry) return this.$router.push({ name: 'no-entry' })

            }
            this.entry = entry
        },
        async saveEntry() {
            new Swal({
                title: 'Loading...',
                allowOutsideClick: false
            })
            Swal.showLoading()

            const picture = await uploadImage(this.file);
            if (picture) {
                this.entry.picture = picture;
            }

            if (this.entry.id) {
                await this.updatedEntry(this.entry)
            } else {
                const id = await this.createEntry(this.entry)
                this.$router.push({ name: 'entry', params: { id } })
            }
            this.file = null
            Swal.fire({
                icon: 'success',
                title: 'Save',
                text: 'This entry saved successfully',
                timer: 3000
            })
            this.$router.push({ name: 'no-entry'})
        },
        async deleteEntryId() {
            await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    new Swal({
                        title: 'Loading...',
                        allowOutsideClick: false
                    })
                    Swal.showLoading()
                    await this.deleteEntry(this.entry.id)
                    this.$router.push({ name: 'no-entry' })
                    Swal.fire(
                        'Deleted!',
                        'Your entry has been deleted.',
                        'success'
                    )
                }
            })
        },
        onSelectedImage(e) {
            const file = e.target.files[0]
            if (!file) {
                this.localImage = null
                this.file = null
                return
            }

            this.file = file
            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL(file)
        },
        selectImage() {
            this.$refs.imageSelector.click()
        }
    },
    created() {
        this.loadEntry()
    },
    watch: {
        id() {
            this.loadEntry()
        }
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 92%;
    background-color: aliceblue;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 130px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>