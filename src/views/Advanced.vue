<template>
  <div class="advanced-page">
    <h1>Complete Personal Cyber Security List</h1>

    <!-- 1. Passwords -->
    <Card class="view-card">
        <h2>Passwords</h2>
        <MdViewer>{{ require('./../docs/advanced-passwords.md') }}</MdViewer>
        <TableList :tableRows="passwordList"/>
    </Card>

    <!-- 2. 2 Factor Authentication -->
    <Card class="view-card">
        <h2>2-Factor Authenitcation</h2>
        <MdViewer>{{ require('./../docs/advanced-2fa.md') }}</MdViewer>
        <TableList :tableRows="twoFaList"/>
    </Card>

    <!-- 3. Browser and Search -->
    <Card class="view-card">
        <h2>Browser and Search</h2>
        <MdViewer>{{ require('./../docs/advanced-browser.md') }}</MdViewer>
        <TableList :tableRows="browserList"/>
    </Card>

    <!-- 4. VPN -->
    <Card class="view-card">
        <h2>VPN</h2>
        <MdViewer>{{ require('./../docs/advanced-vpn.md') }}</MdViewer>
        <TableList :tableRows="vpnList"/>
    </Card>

    <!-- 5. Emails -->
    <Card class="view-card">
        <h2>Emails</h2>
        <MdViewer>{{ require('./../docs/advanced-email.md') }}</MdViewer>
        <TableList :tableRows="emailList"/>
    </Card>

    <!-- 6. Social Media -->
    <Card class="view-card">
        <h2>Social Media</h2>
        <MdViewer>{{ require('./../docs/advanced-social.md') }}</MdViewer>
        <TableList :tableRows="socialList"/>
    </Card>

    <!-- 7. Your Devices -->
    <Card class="view-card">
        <h2>Devices</h2>
        <MdViewer>{{ require('./../docs/advanced-devices.md') }}</MdViewer>
        <TableList :tableRows="devicesList"/>
    </Card>

    <!-- 8. SMS and Calls -->
    <Card class="view-card">
        <h2>SMS and Calls</h2>
        <MdViewer>{{ require('./../docs/advanced-sms.md') }}</MdViewer>
        <TableList :tableRows="smsList"/>
    </Card>

    <!-- 9. Your Router -->
    <Card class="view-card">
        <h2>Router</h2>
        <MdViewer>{{ require('./../docs/advanced-router.md') }}</MdViewer>
        <TableList :tableRows="routerList"/>
    </Card>

    <!-- 10. Operating Systems -->
    <Card class="view-card">
        <h2>Operating Systems</h2>
        <MdViewer>{{ require('./../docs/advanced-os.md') }}</MdViewer>
        <TableList :tableRows="osList"/>
    </Card>


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import TableList from '@/components/TableList.vue';
import MdViewer from '@/components/MdViewer.vue';

import * as listPasswords from './../data/advanced-password-list.json';
import * as list2fa from './../data/advanced-2fa-list.json';
import * as listBrowser from './../data/advanced-browser-list.json';
import * as listVpn from './../data/advanced-vpn-list.json';
import * as listEmail from './../data/advanced-email-list.json';
import * as listSocial from './../data/advanced-social-list.json';
import * as listDevices from './../data/advanced-devices-list.json';
import * as listSms from './../data/advanced-sms-list.json';
import * as listRouter from './../data/advanced-router-list.json';
import * as listOs from './../data/advanced-os-list.json';

@Component({
    components: {
        Card,
        TableList,
        MdViewer,
    },
    data: () => {
        return  {
            passwordList: listPasswords.default,
            twoFaList: list2fa.default,
            browserList: listBrowser.default,
            vpnList: listVpn.default,
            emailList: listEmail.default,
            socialList: listSocial.default,
            devicesList: listDevices.default,
            smsList: listSms.default,
            routerList: listRouter.default,
            osList: listOs.default,
        };
    },
})
export default class Advanced extends Vue {}
</script>

<style lang="scss" scoped>
.advanced-page {
    padding: 0 2em;
    h2 {
        text-align: left;
        margin: 0;
    }
    .view-card{
        margin: 2em auto;
        padding: 1em;
        max-width: 800px;
    }
}
</style>
