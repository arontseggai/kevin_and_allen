<template>
    <div class="columns">
        <div class="column is-6 text-right">
        <p>INFO</p>
        <div class="subcontent">
            <p>Tel: 0031643248030</p>
            <p><a href="mailto:info@grygboit.com">Mail</a></p>
            <p><a href="https://instagram.com/grygierczykboitelle" target="_blank">Instagram</a></p>
            <p><a href="https://vimeo.com/grygboit" target="_blank">Vimeo</a></p>
        </div>
        </div>
        <div class="column is-6">
        <p>CLIENTS</p>
        <div class="subcontent">
            <p v-for="(client, index) in clients" :key="index">{{ client }}</p>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                'clients': [
                    'Indie',
                    'TBWA',
                    'Mortierbrigade',
                    'Fitzroy', 'XXS',
                    'Alfred',
                    'Achtung',
                    'Roorda',
                    'Buutvrij',
                    'Topnotch',
                    'Noahs Ark',
                    'Spinnin',
                    'Spec', 'Bitbird',
                    'Xite',
                    'Blueprint Media',
                    'Doritos',
                    'Iens',
                    'Tele2',
                    'Toto',
                    'SNS',
                    'Domino’s',
                    'ING',
                    'Sanoma',
                    'Jagermeister',
                    '.Amsterdam',
                    'NIX>18',
                    'FunX',
                    'Ministerie van OCW',
                    'Unibet',
                    'Studio Brussel'
                    ]
            }
        }
    }
</script>
