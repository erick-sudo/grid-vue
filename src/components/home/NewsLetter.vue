<template>
    <div className="bg-green-900 w-full flex justify-center items-center" id="newsletter">
        <div className="container py-12 px-4 lg:py-16 md:px-8 bg-brandGreen">
            <div className="mx-auto grid lg:grid-cols-5 gap-6 grid-cols-1">
                <div className="mb-8 lg:mb-0 lg:col-span-3">
                    <h2 className="text-4xl leading-10 font-extrabold">
                        <span className="text-yellow-500">Stay Connected</span>&nbsp;
                        <span className="dark-txt-shadow text-white/90">with GRID</span>
                    </h2>
                    <p className="mt-3 text-lg md:max-w-2xl font-normal text-gray-200 leading-6">
                        Subscribe to our newsletter to keep up with the latest updates and exclusive information from
                        <strong>GRID-ONLINE</strong>. Be among the first to learn about new projects, special offers,
                        and
                        behind-the-scenes perspectives in the world of data science.
                    </p>
                </div>
                <div className="lg:col-span-2 md:flex md:flex-col justify-center">
                    <form className="grid grid-cols-1 md:grid-cols-5 gap-4" method="POST">
                        <v-text-field class="md:col-span-3 text-gray-200" color="gray" clearable label="Email address"
                            prepend-icon="fa-envelope" variant="underlined"></v-text-field>
                        <v-btn class="md:col-span-2" variant="elevated" color="rgb(250, 204, 21)" rounded="xl">
                            Subscribe
                        </v-btn>
                    </form>

                    <div>
                        <p className="text-sm mt-4 text-gray-400 md:text-left">
                            We care about the protection of your data. Read our&nbsp;
                            <a target="_blank" rel="noopener noreferrer" className="underline text-">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="css" scoped></style>