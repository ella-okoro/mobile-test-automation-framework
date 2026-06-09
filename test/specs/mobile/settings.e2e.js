import { expect } from '@wdio/globals'

describe('Android Settings App', () => {
    it('should open the Settings app', async () => {
        const settingsTitle = await $('android=new UiSelector().text("Settings")')
        await expect(settingsTitle).toBeDisplayed()
    })
})